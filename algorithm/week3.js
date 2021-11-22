//#region Solve Me First

function isNumberValid(number) {
  if (1 <= number && number <= 1000) {
    return true;
  }
}

function solveMeFirst(a, b) {
  if (isNumberValid(a) && isNumberValid(b)) {
    return a + b;
  }
  return '숫자를 1이상 1000이하로 입력해 주세요.';
}

function printSumResult(addResult) {
  console.log(addResult);
}

function runSolveMeFirst() {
  printSumResult(solveMeFirst(7, 3));
  printSumResult(solveMeFirst(1001, 3));
  printSumResult(solveMeFirst(40, 1004));
  printSumResult(solveMeFirst(-1, 100));
  printSumResult(solveMeFirst(12, 0));
}

runSolveMeFirst();

// 실행 결과

// 10
// 숫자를 1이상 1000이하로 입력해 주세요.
// 숫자를 1이상 1000이하로 입력해 주세요.
// 숫자를 1이상 1000이하로 입력해 주세요.
// 숫자를 1이상 1000이하로 입력해 주세요.

//#endregion

//#region Grading Students



//#endregion

//#region Compare the Triplets
//#endregion

//#region A Very Big Sum



//#endregion

//#region Time Conversion

function getAMPMRemovedArr(hhmmssArr, amPm) {
  const lastIndex = hhmmssArr.length - 1;
  hhmmssArr[lastIndex] = hhmmssArr[lastIndex].replace(amPm, '');

  return hhmmssArr;
}

function convertAMto24hour(hhmmssArr) {
  const amHour = hhmmssArr[0];

  if (amHour === '12') {
    hhmmssArr[0] = '00';
  }
  
  return getAMPMRemovedArr(hhmmssArr, 'AM');
}

function convertPMto24hour(hhmmssArr) {
  const pmHour = Number(hhmmssArr[0]);
  const minCorrectionHour = 1;
  const maxCorrectionHour = 11;

  if (minCorrectionHour <= pmHour && pmHour <= maxCorrectionHour) {
    const hoursIn24Correction = 12;
    hhmmssArr[0] = pmHour + hoursIn24Correction;
  }

  return getAMPMRemovedArr(hhmmssArr, 'PM');
}

function timeConversion(timeIn12HourFormat) {
  const hhmmssArr = timeIn12HourFormat.split(':');
  let convertedTime = [];

  if (timeIn12HourFormat.includes('AM')) {
    convertedTime = convertAMto24hour(hhmmssArr);
  } else if (timeIn12HourFormat.includes('PM')) {
    convertedTime = convertPMto24hour(hhmmssArr);
  }

  return convertedTime;
}

function printTimeConversion(convertedTime) {
  console.log(convertedTime.join(':'));
}

function runTimeConversion() {
  printTimeConversion(timeConversion('12:01:00PM'));
  printTimeConversion(timeConversion('12:01:00AM'));
  printTimeConversion(timeConversion('07:05:45PM'));
  printTimeConversion(timeConversion('07:05:45AM'));
}

runTimeConversion();

// 실행결과

// 12:01:00
// 00:01:00
// 19:05:45
// 07:05:45

//#endregion

//#region Number Line Jumps



//#endregion