function solve() {
  let needle = Number(document.getElementById('num').value);
  let inputArr = document.getElementById('arr').value;

  let haystack = JSON.parse(inputArr);
  let resultArr = [];

  for (let el of haystack) {
      let hasValue = el.includes(needle);
      let valuePos = el.indexOf(needle);
      resultArr.push(`${hasValue} -> ${valuePos}`);
  }

  document.getElementById('result').textContent = resultArr.join(',');
}