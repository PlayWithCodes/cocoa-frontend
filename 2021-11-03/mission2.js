//#region 1. factorial 함수

function factorial(number) {
    const factorialArr = [1];

    for (let i = 2; i <= number; i++) {
        factorialArr[i - 1] = factorialArr[i - 2] * i;
    }

    return factorialArr;
}

console.log(`1. factorial 함수 \n[${factorial(4)}]\n`);
//#endregion


// 2. 배열거르기
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
const regEx = new RegExp("[^A-Za-z0-9]"); // A-Za-z0-9 제외 문자 찾기

// for/while문을 사용한 버전
function filterIdVer1() {
    const filteredPeopleArr = [];

    // for 문
    // for (let i = 0; i < peoples.length; i++) {
    //     if (!regEx.test(peoples[i])) {
    //         filteredPeopleArr.push(peoples[i].replace(/[0-9]/g, ""));
    //     }
    // }

    // while 문
    let index = 0;
    while (index < peoples.length) {
        if (!regEx.test(peoples[index])) {
            filteredPeopleArr.push(peoples[index].replace(/[0-9]/g, ""));
        }
        index++;
    }

    return filteredPeopleArr;
}

// forEach,filter, map등의 고차함수를 사용한 버전
function filterIdVer2() {
    return peoples.filter(e => !regEx.test(e)).map(e => e.replace(/[0-9]/g, ""));
}

console.log(`2-1. for/while문을 사용한 버전 \n[${filterIdVer1()}]\n`);
console.log(`2-2. forEach,filter, map등의 고차함수를 사용한 버전 \n[${filterIdVer2()}]\n`);

// 3. 평균 구하기
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

function caculateAverageGrade(){
    const studentAverageGradeArr = [];
    const studentAverageMaxGradeArr = [];
    const gradeSumReducer = (previousGrade, currentGrade) => previousGrade + currentGrade;
    const selectMaxGradegradeSumReducer = (previousGrade, currentGrade) => previousGrade > currentGrade ? previousGrade : currentGrade;

    grades.forEach(e => {
        studentAverageGradeArr.push(Math.round(e.reduce(gradeSumReducer) / e.length));        
    });
    console.log(`3-1. 각 학생의 평균점수 \n[${studentAverageGradeArr}]\n`);
    
    grades.forEach(e => {
        studentAverageMaxGradeArr.push((e.reduce(selectMaxGradegradeSumReducer)));        
    });
    
    console.log(`3-2. 모든 학생의 최고점수의 평균점수 \n[${Math.round(studentAverageMaxGradeArr.reduce(gradeSumReducer) / studentAverageMaxGradeArr.length)}]\n`);
}

caculateAverageGrade();