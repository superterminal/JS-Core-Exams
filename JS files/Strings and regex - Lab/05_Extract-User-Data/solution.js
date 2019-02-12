function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d \d{3} \d{3}|\+359-\d-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+.[a-z]{2,3})$/g;
  let result = document.getElementById('result');
  let pEl = document.createElement('p');
  let invalidDataPar = pEl.cloneNode();
  invalidDataPar.textContent = 'Invalid data';
  let dash = pEl.cloneNode();
  dash.textContent = '- - -';

  inputArr.forEach(el => {
      let currMatch = pattern.exec(el);
      if (currMatch) {
          printResult(`Name: ${currMatch[1]}`);
          printResult(`Phone Number: ${currMatch[2]}`);
          printResult(`Email: ${currMatch[3]}`);
      } else {
          result.appendChild(invalidDataPar.cloneNode(true));
      }

      result.appendChild(dash.cloneNode(true));
  });

  function printResult(txt) {
      let p = document.createElement('p');
      p.textContent = txt;
      result.appendChild(p);
  }
}

