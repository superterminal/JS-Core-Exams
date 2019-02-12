function solve() {
    let inputField  = document.getElementById('input');
    let outputField = document.getElementById('output');
    let extractButton = document.querySelector('#exercise > button');

    let firstNumsPattern = /[0-9]+/;

    extractButton.addEventListener('click', () => {
        let takeNumbers = firstNumsPattern.exec(inputField.value)[0];
        let resultStr = inputField.value.substr(takeNumbers.length, takeNumbers).split('');
        let lastChar = resultStr.pop();
        resultStr = resultStr.join('');
        let twoStr = resultStr.split(lastChar);
        let regexPattern = new RegExp(`[^${twoStr[0]}]`, 'g');
        let finalStr = twoStr[1].match(regexPattern).join('').replace(/#/g, ' ');
        outputField.value = finalStr;
    })
}