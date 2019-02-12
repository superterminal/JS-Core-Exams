function solve() {
  let inputStr = document.getElementById('str').value;
  let numSplit = Number(document.getElementById('num').value);

  let diff = inputStr.length % numSplit;

  let resultArr = [];

  for (let i = 0; i < inputStr.length - diff; i += numSplit) {

      resultArr.push(inputStr.substr(i, numSplit));

  }

  if (diff !== 0) {
      let currSubstr = inputStr.substr(inputStr.length - diff) + inputStr.substr(0, (numSplit - diff));
      resultArr.push(currSubstr);
  }

  document.getElementById('result').textContent = resultArr.join(' ');

}