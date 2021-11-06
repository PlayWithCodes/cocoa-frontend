//#region 1. factorial 함수

function factorial(number) {
	const factorialArr = [1];

	for (let i = 2; i <= number; i++) {
		factorialArr.push(factorialArr[i - 2] * i);
	}

	return factorialArr;
}

console.log(`1. factorial 함수 \n[${factorial(4)}]\n`);

//#endregion

//#region 2. 배열거르기

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
const isNotAlphabetNumberRegExp = new RegExp("[^A-Za-z0-9]"); // A-Za-z0-9 제외 문자 찾기
const isNumberRegExp = new RegExp("[0-9]");

// for/while문을 사용한 버전
function filterIdVer1() {
	const filteredPeopleArr = [];

	// for 문
	// for (let i = 0; i < peoples.length; i++) {
	//     if (!isNotAlphabetNumberRegExp.test(peoples[i])) {
	//         filteredPeopleArr.push(peoples[i].replace(/[0-9]/g, ""));
	//     }
	// }

	// while 문
	let index = 0;
	while (index < peoples.length) {
		if (!isNotAlphabetNumberRegExp.test(peoples[index])) {
			filteredPeopleArr.push(peoples[index].replace(isNumberRegExp, ""));
		}
		index++;
	}

	return filteredPeopleArr;
}

// forEach,filter, map등의 고차함수를 사용한 버전
function filterIdVer2() {
	return peoples.filter(e => !isNotAlphabetNumberRegExp.test(e)).map(e => e.replace(isNumberRegExp, ""));
}

console.log(`2-1. for/while문을 사용한 버전 \n[${filterIdVer1()}]\n`);
console.log(`2-2. forEach,filter, map등의 고차함수를 사용한 버전 \n[${filterIdVer2()}]\n`);
//#endregion

//#region 3. 평균 구하기
const grades = [[88, 76, 77], [33, 44, 44], [90, 100, 94], [30, 44, 98]];

function caculateAverageGrade() {
	const studentAverageGradeArr = [];
	const studentAverageMaxGradeArr = [];
	const gradeSumReducer = (previousGrade, currentGrade) => previousGrade + currentGrade;
	const selectMaxGradegradeSumReducer 
		= (previousGrade, currentGrade) => previousGrade > currentGrade ? previousGrade : currentGrade;

	grades.forEach(e => {
		studentAverageGradeArr.push((e.reduce(gradeSumReducer) / e.length).toFixed(2));
	});
	console.log(`3-1. 각 학생의 평균점수 \n[${studentAverageGradeArr}]\n`);

	grades.forEach(e => {
		studentAverageMaxGradeArr.push((e.reduce(selectMaxGradegradeSumReducer)));
	});

	console.log(`3-2. 모든 학생의 최고점수의 평균점수 \n[${(studentAverageMaxGradeArr.reduce(gradeSumReducer) / studentAverageMaxGradeArr.length).toFixed(2)}]\n`);
}

caculateAverageGrade();
//#endregion

//#region 4. 배열 만들기
const data = {
	"debug": "on",
	"window": {
		"title": "Sample Konfabulator Widget",
		"name": "main_window",
		"width": 500,
		"height": 500
	},
	"image": {
		"src": "Images/Sun.png",
		"name": "sun1",
		"hOffset": 250,
		"vOffset": 250,
		"alignment": "center"
	},
	"text": {
		"data": "Click Here",
		"size": 36,
		"style": "bold",
		"name": "text1",
		"hOffset": 250,
		"vOffset": 100,
		"alignment": "center",
		"onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
	}
}

function getKeysInNumberType() {
	const keysInNumberTypeArr = [];

	Object.values(data).forEach(memberObject => {
		keysInNumberTypeArr.push(Object.keys(memberObject).filter(key => typeof memberObject[key] === "number"));
	});
	return keysInNumberTypeArr;
}

// console.log(`4. 배열 만들기 \n[${getKeysInNumberType()}]\n`);
console.log(`4. 배열 만들기 \n[${getKeysInNumberType().flat(Infinity)}]\n`);
//#endregion

//#region 5. 배열 결과 출력
const complexData = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"propType": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"propType": "kt",
		"childnode": 
		[
			{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"propType": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"propType": "kt",
					"childnode": [{
						"id": 11592,
						"name": "cherry",
						"phone": "111-222-0000",
						"propType": "lg",
						"childnode": []
					},
					{
						"id": 11595,
						"name": "solvin",
						"phone": "010-000-3333",
						"propType": "sk",
						"childnode": []
					}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"propType": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"propType": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"propType": "kt",
						"childnode": [{
							"id": 116890,
							"name": "wonsuk",
							"phone": "010-000-0000",
							"propType": "kt",
							"childnode": []
						},
						{
							"id": 1168901,
							"name": "chulsu",
							"phone": "010-0000-0000",
							"propType": "sk",
							"childnode": []
						}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"propType": "lg",
				"childnode": []
			}
		]
	}]
}]

const skTypeNameArr = [];

function getNameArr(object, objPropName, objPropValue) {
	if (object instanceof Array) {
		for (var i = 0; i < object.length; i++) {
			getNameArr(object[i], objPropName, objPropValue);
		}
	}
	else {
		for (var prop in object) {
			if (prop == objPropName) {
				if (object[prop] == objPropValue) {
					skTypeNameArr.push(object.name);
					continue;
				}
			}
			if (object[prop] instanceof Object || object[prop] instanceof Array) {
				getNameArr(object[prop], objPropName, objPropValue);
			}
		}
	}
}

function printNameByType() {
	getNameArr(complexData, 'propType', 'sk');
	console.log(`5. 배열 결과 출력\n[${skTypeNameArr}]\n`);
}

printNameByType();
//#endregion

//#region 6. reduce 만들기
const numberArr = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const initValue = 5;

const myReduce = (arr, callback, initialValue = 0) => {	
	let result = initialValue;

	for (let i = 0; i < arr.length; i+=2) {
		result += callback(arr[i], arr[i+1]);		
	}

	return result;
}

console.log("6. reduce 만들기");
console.log(`결과값: ${myReduce(numberArr, reducer)}`);
console.log(`결과값: ${myReduce(numberArr, reducer, initValue)}, 초기값: ${initValue}`);
//#endregion



// 실행결과

// 1. factorial 함수 
// [1,2,6,24]

// 2-1. for/while문을 사용한 버전 
// [honux,head,zello,lucas]

// 2-2. forEach,filter, map등의 고차함수를 사용한 버전 
// [honux,head,zello,lucas]

// 3-1. 각 학생의 평균점수 
// [80,40,95,57]

// 3-2. 모든 학생의 최고점수의 평균점수 
// [83]

// 4. 배열 만들기 
// [width,height,hOffset,vOffset,size,hOffset,vOffset]

// 5. 배열 결과 출력
// [Yong,hary,solvin,hani,chulsu]

// 6. reduce 만들기
// 결과값: 10
// 결과값: 15, 초기값: 5