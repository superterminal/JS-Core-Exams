function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);

  let evenEl = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 0) {
            evenEl.push(inputArr[i]);
        }
    }

    document.getElementById('result').textContent = evenEl.join(' x ');
}