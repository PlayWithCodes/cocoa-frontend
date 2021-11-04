
// 게임 참가자 객체
class Player {
    constructor(name, gameNumberArr) {
        this.name = name;
        this.gameNumberArr = gameNumberArr;
        this.order = 0;
    }
    speakGameNumber() {
        console.log(`player: ${this.name}, number: ${this.gameNumberArr[this.order]}`);
        this.order++;
    };
}

const playerArr = [];

// 시작 함수
function solution(base, gameNum, totalPlayerNum, selectedPlayer) {
    console.log(`\n${base}진수, ${gameNum}개 숫자 까지, 참가자 ${totalPlayerNum}명`);

    // 게임 참가자 생성
    for (let i = 0; i < totalPlayerNum; i++) {
        playerArr[i] = new Player(i + 1);
    }

    const maxGameNumber = gameNum * totalPlayerNum;
    const convertedGameNumberArr = getConvertedGameNumber(maxGameNumber, base);
    giveGameNumberToPlayers(playerArr, totalPlayerNum, convertedGameNumberArr);
    startGame(playerArr, convertedGameNumberArr, totalPlayerNum, selectedPlayer);
}

// 게임시작 함수
function startGame(playerArr, convertedGameNumberArr, totalPlayerNum, selectedPlayer) {
    // 전체 참가자
    if (typeof selectedPlayer === "undefined") {
        for (let i = 0; i < convertedGameNumberArr.length; i++) {
            playerArr[i % totalPlayerNum].speakGameNumber();
        }
        return;
    }

    // 선택된 참가자
    for (let i = 0; i < playerArr[selectedPlayer - 1].gameNumberArr.length; i++) {
        playerArr[selectedPlayer - 1].speakGameNumber();
    }
}

// 게임넘버를 참가자들에게 나눠주는 함수
function giveGameNumberToPlayers(playerArr, totalPlayerNum, convertedGameNumberArr) {
    for (let playerIndex = 0; playerIndex < totalPlayerNum; playerIndex++) {
        const gameNumberArr = [];

        // 각각 게임 참가자에게 해당하는 게임넘버 저장
        for (let j = playerIndex; j < convertedGameNumberArr.length; j+=totalPlayerNum) {
            gameNumberArr.push(convertedGameNumberArr[j]);
        }

        playerArr[playerIndex].gameNumberArr = gameNumberArr;
    }
}

// 진수에 맞게 게임넘버를 구하는 함수
function getConvertedGameNumber(maxGameNumber, base) {
    const convertedGameNumberArr = [];

    // 십진수 최대 게임넘버까지 반복
    for (let decimal = 0; decimal < maxGameNumber; decimal++) {
        const convertedNum = decimal.toString(base);

        // 기존 loop방식을 spread연산자로 변경
        convertedGameNumberArr.push(...convertedNum);

        console.log(decimal + ": " + convertedNum);
    }

    return convertedGameNumberArr;
}

const base = 16;
const gameNum = 6;
const totalPlayerNum = 3;
const selectedPlayer = 1;

// 전체 참가자 출력
solution(base, gameNum, totalPlayerNum);
// 선택한 참가자 출력
solution(base, gameNum, totalPlayerNum, selectedPlayer);


// 실행 결과
// 16진수, 6개 숫자 까지, 참가자 3명
// 0: 0
// 1: 1
// 2: 2
// 3: 3
// 4: 4
// 5: 5
// 6: 6
// 7: 7
// 8: 8
// 9: 9
// 10: a
// 11: b
// 12: c
// 13: d
// 14: e
// 15: f
// 16: 10
// 17: 11
// player: 1, number: 0
// player: 2, number: 1
// player: 3, number: 2
// player: 1, number: 3
// player: 2, number: 4
// player: 3, number: 5
// player: 1, number: 6
// player: 2, number: 7
// player: 3, number: 8
// player: 1, number: 9
// player: 2, number: a
// player: 3, number: b
// player: 1, number: c
// player: 2, number: d
// player: 3, number: e
// player: 1, number: f
// player: 2, number: 1
// player: 3, number: 0
// player: 1, number: 1
// player: 2, number: 1

// 16진수, 6개 숫자 까지, 참가자 3명, 1번 참가자 선택
// player: 1, number: 0
// player: 1, number: 3
// player: 1, number: 6
// player: 1, number: 9
// player: 1, number: c
// player: 1, number: f
// player: 1, number: 1 