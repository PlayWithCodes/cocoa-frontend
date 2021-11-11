const data = "[1,2,[3,4,[5,[6]]]]";

function run(data) {
    const letterArr = data.split('');
    printStringAnalysisResult(getAnalizedString(letterArr));
    printParsedStructure(letterArr);
}

function getAnalizedString(letterArr) {
    let leftBracketCount = 0, rightBracketCount = 0, elementCount = 0;
    const numberFilteringRegExp = new RegExp(/[A-Za-z0-9]/gi);

    letterArr.forEach(letter => {
        if (numberFilteringRegExp.test(letter)) {
            elementCount++;
        } else {
            switch (letter) {
                case '[':
                    leftBracketCount++;
                    break;
    
                case ']':
                    rightBracketCount++;
                    break;
            }
        }    
    });

    const isBracketEven = leftBracketCount === rightBracketCount;
    return { isBracketEven, leftBracketCount, elementCount };
}

function printParsedStructure(letterArr) {
    let prevLetter = '', spacing = '', structureString = [];
    const numberFilteringRegExp = new RegExp(/[0-9]/gi);

    letterArr.forEach(letter => {
        if (prevLetter === '[') {
            spacing += '\t';
        } else if (prevLetter === ']') {
            spacing = spacing.substring(1);
        } else if (numberFilteringRegExp.test(prevLetter) && letter === ']') {
            spacing = spacing.substring(1);
            structureString += '\n';
        }

        if (letter === ',') {
            structureString += letter + '\n';
        } else {
            structureString += spacing + letter;
        }

        if (letter === '[' || letter === ']') {
            structureString += '\n';
        }

        prevLetter = letter;
    });

    console.log(structureString);
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

// 실행 결과

// [
//     1,
//     2,
//     [
//             3,
//             4,
//             [
//                     5,
//                     [
//                             6
//                     ]
//             ]
//     ]
// ]
// 배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다