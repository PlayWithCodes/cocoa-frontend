class StudentScore {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = parseInt(kor);
    this.eng = parseInt(eng);
    this.math = parseInt(math);
  }
  printKor() {
    console.log(`이름: ${this.name}, 국어: ${this.kor}`);
  }
  printEng() {
    console.log(`이름: ${this.name}, 영어: ${this.eng}`);
  }
  printMath() {
    console.log(`이름: ${this.name}, 수학: ${this.math}`);
  }
}

const getStudentScoreArr = function (rl) {
  const studentNumber = rl.question('학생이 몇 명 인가요?');

  const studentArr = [];
  for (let i = 0; i < studentNumber; i++) {
    const studentName = new Promise(resolve => {
      rl.question('학생이름?', resolve)
    });
    const korScore = new Promise(resolve => {
      rl.question('국어점수?', resolve)
    });
    const engScore = new Promise(resolve => {
      rl.question('영어점수?', resolve)
    });
    const mathScore = new Promise(resolve => {
      rl.question('수학점수?', resolve)
    });

    studentArr.push(new StudentScore(studentName, korScore, engScore, mathScore));

  }

// 비동기 테스트
// const getStudentScoreArr = async function (rl) {
//   const studentNumber = await new Promise(resolve => {
//     rl.question('학생이 몇 명 인가요?', resolve)
//   });

//   const studentArr = [];
//   for (let i = 0; i < studentNumber; i++) {
//     const studentName = await new Promise(resolve => {
//       rl.question('학생이름?', resolve)
//     });
//     const korScore = await new Promise(resolve => {
//       rl.question('국어점수?', resolve)
//     });
//     const engScore = await new Promise(resolve => {
//       rl.question('영어점수?', resolve)
//     });
//     const mathScore = await new Promise(resolve => {
//       rl.question('수학점수?', resolve)
//     });

//     studentArr.push(new StudentScore(studentName, korScore, engScore, mathScore));
//   }

  return {kor: studentArr.map(s => s.kor), eng: studentArr.map(s => s.eng), math: studentArr.map(s => s.math)};
}

var partition = function (studentScoreArr, left, right, pivotIndex) { // 정렬하는 부분
  var temp;
  var pivot = studentScoreArr[pivotIndex];
  while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
    while (studentScoreArr[left] < pivot)
      left++;
    while (studentScoreArr[right] > pivot)
      right--;
    if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
      temp = studentScoreArr[left];
      studentScoreArr[left] = studentScoreArr[right];
      studentScoreArr[right] = temp; // 서로 바꿔줍니다.
      left++;
      right--;
    }
  }
  temp = studentScoreArr[left];
  studentScoreArr[left] = studentScoreArr[pivotIndex];
  studentScoreArr[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
  return left;
};

function getQuickSortedArr(studentScoreArr, left, right) {
  if (!left) left = 0;
  if (!right) right = studentScoreArr.length - 1;
  var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
  pivotIndex = partition(studentScoreArr, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
  if (left < pivotIndex - 1)
    quickSort(studentScoreArr, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right)
    quickSort(studentScoreArr, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return studentScoreArr;
}

function run() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let studentScoreArr = getStudentScoreArr(rl);

  getQuickSortedArr(studentScoreArr.kor);
  getQuickSortedArr(studentScoreArr.eng);
  getQuickSortedArr(studentScoreArr.math);
}

run();