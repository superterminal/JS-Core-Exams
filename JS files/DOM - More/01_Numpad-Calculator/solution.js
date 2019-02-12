function solve() {
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput').value;

    let buttons = document.getElementsByTagName('button');

    buttons = Array.from(buttons);


    buttons.forEach((el) => el.addEventListener('click', () => {
        let currValue = el.value;
        if (expressionOutput !== '') {
            expressionOutput.textContent += currValue;
        } else {
            expressionOutput.textContent += currValue;
        }
        if (currValue === '/' || currValue === '*' || currValue === '+' || currValue === '-') {
            expressionOutput.textContent += currValue;
        }
    }));
}