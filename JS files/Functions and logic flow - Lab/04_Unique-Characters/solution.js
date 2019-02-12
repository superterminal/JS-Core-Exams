function solve() {
  let str = document.getElementById('string').value;
  let result = '';

  filterStr(str);
  document.getElementById('result').textContent = result;

  function filterStr(str) {
    for(let i = 0; i < str.length; i++) {
      if(str[i] === ' ' || result.includes(str[i]) === false) {
        result += str[i];
      }
    }
  }
}