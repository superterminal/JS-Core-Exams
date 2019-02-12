function greatestCD() {
    let firstNum = Number(document.getElementById('num1').value);
    let secondNum = Number(document.getElementById('num2').value);


    let maxNum = Math.max(firstNum, secondNum);
    let minNum = Math.min(firstNum, secondNum);

    document.getElementById('result').textContent = euclideanAlgorithm();

    function euclideanAlgorithm() {
        let remainder = 0;
        while (minNum !== 0) {
            remainder = maxNum % minNum;
            maxNum = minNum;
            minNum = remainder;
        }
        return maxNum;
    }
}