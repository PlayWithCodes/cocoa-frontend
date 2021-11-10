const data = "[1,2,[3,4,[5,[6]]]]";

function run(data) {
    printStringAnalysisResult(analizeString(data));
}

function analizeString(data) {
    const bracketFilteringRegExp = /[\[\]]/gi;
    const numberFilteringRegExp = /[0-9]/gi;

    const brackets = data.match(bracketFilteringRegExp);
    const elementCount = data.match(numberFilteringRegExp).length;

    const leftBracketCount = brackets.filter(e => e === '[').length;
    const rightBracketCount = brackets.filter(e => e === ']').length;

    const isBracketEven = leftBracketCount === rightBracketCount;

    return { isBracketEven, leftBracketCount, elementCount };
}

function printStringAnalysisResult(analizedString) {
    if (analizedString.isBracketEven) {
        console.log(`배열의 중첩된 깊이 수준은 ${analizedString.leftBracketCount}이며, 총 ${analizedString.elementCount}개의 원소가 포함되어 있습니다`);
    }
    else {
        console.log('닫는 괄호가 일치하지 않습니다');
    }
}

run(data);