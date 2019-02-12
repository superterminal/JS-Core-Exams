function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value).map(Number);
  let result = document.getElementById('result');

  for (let i = 0; i < inputArr.length; i++) {
      let tempP = document.createElement('p');
      tempP.textContent = `${i} -> ${inputArr[i] * inputArr.length}`;
      result.appendChild(tempP);
  }

}