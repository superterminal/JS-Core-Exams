function solve() {
    let inputStr = document.getElementById('str');
    let outputEl = document.getElementById('result');

    let onesSum = findOnesSum(inputStr.value);
    let pattern = /[A-Za-z ]+/g;
    
    let newText = inputStr.value.slice(onesSum, -onesSum);

    let binaryArr = [];

    for (let i = 0; i < newText.length; i += 8) {
        let currChar = newText.slice(i, i + 8);
        let currLetterInAscii = parseInt(+currChar, 2);
        binaryArr.push(String.fromCharCode(currLetterInAscii));
    }

    let filteredArr = binaryArr
        .filter(el => (el.match(pattern)));
    
    outputEl.textContent = filteredArr.join('');
    
    function findOnesSum(value) {

        let result = value;

        while (result.length > 1) {
            let temp = result
                .split('')
                .reduce((a, b) => +a + +b)
                .toString();
            result = temp;
        }

        return result;
    }
}