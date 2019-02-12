function solve() {
    let inputArr = JSON.parse(document.getElementById('arr').value);
    let resultDiv = document.getElementById('result');

    let ascArr = inputArr.sort((a, b) => a - b);

    let ascDiv = document.createElement('div');

    ascDiv.textContent = ascArr.join(', ');

    resultDiv.appendChild(ascDiv);

    let alphaArr = inputArr.sort();

    let alphaDiv = document.createElement('div');

    alphaDiv.textContent = alphaArr.join(', ');

    resultDiv.appendChild(alphaDiv);

}