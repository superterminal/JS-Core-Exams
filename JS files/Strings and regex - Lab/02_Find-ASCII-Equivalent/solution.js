function solve() {
  let inputStr = document.getElementById('str').value;
  let resultEl = document.getElementById('result');

  let numbers = [];

  inputStr
      .split(' ')
      .filter(x => x)
      .forEach(el => {
          if (isNaN(el)) {
              let currWordInAscii = el
                  .split('')
                  .map(char => char.charCodeAt(0))
                  .join(' ');
              let tempP = document.createElement('p');
              tempP.textContent = currWordInAscii;
              resultEl.appendChild(tempP);
          } else {
              numbers.push(el);
          }
      });

    let fromNumberToWord = String.fromCharCode(...numbers);
    let tempP = document.createElement('p');
    tempP.textContent = fromNumberToWord;
    resultEl.appendChild(tempP);

}