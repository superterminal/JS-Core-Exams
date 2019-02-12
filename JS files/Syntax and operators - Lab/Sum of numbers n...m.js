function solve(firstNum, secondNum) {
    firstNum = +firstNum;
    secondNum = +secondNum;

    let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
}