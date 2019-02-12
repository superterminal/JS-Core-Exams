function solve() {
  let firstNum = +document.getElementById('num1').value;
  let multiplier = +document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.textContent = '';

  checkNums(firstNum, multiplier);

  function checkNums(firstN, m) {
    if (firstN > m) {
      result.textContent = 'Try with other numbers.';
      return;
    }
    printNums(firstN, m);
  }

  function printNums(firstNumber, multipler) {
    for (let i = firstNumber; i <= multipler; i++) {
      let tempP = document.createElement('p');
      tempP.textContent = `${i} * ${multipler} = ${i * multipler}`;
      result.appendChild(tempP);
    }
  }

  

}