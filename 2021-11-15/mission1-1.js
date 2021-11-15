const meanReducer = (a, b) => a + b;

class StudentScoreCalculator {
  constructor(scoreArr) {
    this.scoreArr = scoreArr;
    this.scoreArrLength = scoreArr.length;
  }
  getMean() {
    const mean = this.scoreArr.reduce(meanReducer) / this.scoreArrLength;
    return mean;
  }
  getStandardDeviation() {
    const mean = this.getMean();
    return Math.sqrt(this.scoreArr.map(x => Math.pow(x - mean, 2)).reduce(meanReducer) / this.scoreArrLength)
  }
}

const mathScoreArr = [
  89.23,
  82.03,
  71.56,
  78.82,
  85.05,
  84.44,
  67.53,
  71.7,
  77.97,
  73.77,
  84.25,
  67.01,
  73.78,
  64.19,
  89.89,
  90.32,
  73.21,
  75.35,
  83.22,
  74.01,
];

function printScore(score) {
  console.log(score);
}

function run() {
  const studentsMathScoreCalculator = new StudentScoreCalculator(mathScoreArr);
  printScore(studentsMathScoreCalculator.getMean());
  printScore(studentsMathScoreCalculator.getStandardDeviation());
}

run();

// 실행 결과
// 77.8665
// 7.671964725544559