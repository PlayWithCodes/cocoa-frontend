// 1. A + B
function getSumAB(a, b){
    if ((0 < a && a < 10) && (0 < b && b < 10)) {
        return a + b;
    }
}

console.log(getSumAB(2, 4));


// 2. A / B
function getDevidedAB(a, b){
    if ((0 < a && a < 10) && (0 < b && b < 10)) {
        return a / b;
    }
}

console.log(getDevidedAB(2, 4));

// 3. 별 찍기
function printStars(numOfStars){
    for (let i = 0; i < numOfStars; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

printStars(10);