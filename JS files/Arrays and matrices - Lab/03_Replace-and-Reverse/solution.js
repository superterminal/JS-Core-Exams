function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);

  inputArr.forEach((currWord, index, arr) => {
      arr[index] = currWord.split('').reverse().join('');
  });

  let resultArr = inputArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  document.getElementById('result').textContent = resultArr.join(' ');
}