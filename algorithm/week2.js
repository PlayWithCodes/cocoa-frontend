
//#region 1. 나누어 떨어지는 숫자 배열

const getModuloArr = (numArr, divisor) => {
  const moduloArr = [];

  for (const cranePosition of numArr) {
    if (cranePosition % divisor == 0) {
      moduloArr.push(cranePosition);
    }
  }

  if (moduloArr.length <= 0) {
    moduloArr.push(-1);

    return moduloArr;
  }

  return getAscendedArr(moduloArr);
}

const getAscendedArr = (arr) => arr.sort((a, b) => a - b);

const printArr = (arr) => console.log(arr);

const run = () => {
  const numArr1 = [5, 8, 7, 10];
  const numArr2 = [2, 36, 1, 3];
  const numArr3 = [3, 2, 6];

  printArr(getModuloArr(numArr1, 5));
  printArr(getModuloArr(numArr2, 1));
  printArr(getModuloArr(numArr3, 10));
}

run();

// 실행 결과
// (2) [5, 10]
// (4) [1, 2, 3, 36]
// (1) [-1]

//#endregion


//#region 2. 크레인 인형뽑기 게임

function getDoll(gameBoardArr, cranePosition) {
  for (let i = 0; i < gameBoardArr.length; i++) {
    const pickedDoll = gameBoardArr[i][cranePosition - 1];

    if (pickedDoll > 0) {
      gameBoardArr[i].splice(cranePosition - 1, 1, 0);

      return pickedDoll;
    }
  }

  return 0;
}

function popSameDollInArr(dollArr, doll) {
  let matchedDollCount = 0;

  if (dollArr[dollArr.length - 1] === doll) {
    dollArr.pop();
    matchedDollCount = 1;
  } else {
    dollArr.push(doll);
  }

  return matchedDollCount;
}

function getMatchedDollCount(gameBoardArr, movesArr) {
  let matchedDollCount = 0;
  const dollArr = [];

  movesArr.forEach(cranePosition => {
    const doll = getDoll(gameBoardArr, cranePosition);

    if (doll !== 0) {
      matchedDollCount += popSameDollInArr(dollArr, doll);
    }
  });

  return matchedDollCount;
}

function printGameScore(matchedDollCount) {
  console.table(`게임결과: ${matchedDollCount}번 터트림!!`);
}

function startGame() {
  const gameBoardArr =
    [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];

  const movesArr = [1, 5, 3, 5, 1, 2, 1, 4];

  const matchedDollCount = getMatchedDollCount(gameBoardArr, movesArr);

  printGameScore(matchedDollCount);
}

startGame();

// 실행 결과
// 게임결과: 2번 터트림!!

//#endregion


//#region 3. 두 개 뽑아서 더하기

function getAddedNumArr(numArr) {
  const additionArr = [];

  for (let i = 0; i < numArr.length; i++) {
    const num1 = numArr[i];

    for (let j = 0; j < numArr.length; j++) {
      if (i !== j) {
        const addedNum = num1 + numArr[j];

        if (additionArr.indexOf(addedNum) === -1) {
          additionArr.push(addedNum);
        }
      }
    }
  }

  return additionArr;
}

function printAddedNumArr(ascendedNumArr) {
  console.log(ascendedNumArr);
}

function pickTwoNumbersAndAdd(numArr) {
  const addedNumArr = getAddedNumArr(numArr);
  const ascendedNumArr = addedNumArr.sort((a, b) => (a - b));
  printAddedNumArr(ascendedNumArr);
}

function startMission3() {
  const numArr1 = [2, 1, 3, 4, 1];
  const numArr2 = [5, 0, 2, 7];

  pickTwoNumbersAndAdd(numArr1);
  pickTwoNumbersAndAdd(numArr2);
}

startMission3();

// 실행 결과
// (6) [2, 3, 4, 5, 6, 7]
// (5) [2, 5, 7, 9, 12]

//#endregion