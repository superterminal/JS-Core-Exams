function solve() {
  let firstNum = +(document.getElementById('firstNumber').value);
  let secondNum = +(document.getElementById('secondNumber').value);
  let firstStr = document.getElementById('firstString').value;
  let secondStr = document.getElementById('secondString').value;
  let thirdStr = document.getElementById('thirdString').value;

  let result = document.getElementById('result');

  for (let i = firstNum; i <= secondNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      let tempP = document.createElement('p');
      tempP.textContent = `${i} ${firstStr}-${secondStr}-${thirdStr}`;
      result.appendChild(tempP);
    } else if (i % 3 === 0) {
      let tempP = document.createElement('p');
      tempP.textContent = `${i} ${secondStr}`;
      result.appendChild(tempP);
    } else if (i % 5 === 0) {
      let tempP = document.createElement('p');
      tempP.textContent = `${i} ${thirdStr}`;
      result.appendChild(tempP);
    } else {
      let tempP = document.createElement('p');
      tempP.textContent = i;
      result.appendChild(tempP);
    }
  }

}