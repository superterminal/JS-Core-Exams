function solve(firstStr, secondStr, thirdStr) {
    let firstLen = firstStr.length;
    let secondLen = secondStr.length;
    let thirdLen = thirdStr.length;

    console.log(firstLen + secondLen + thirdLen);
    console.log(Math.round((firstLen + secondLen + thirdLen) / 3));
}