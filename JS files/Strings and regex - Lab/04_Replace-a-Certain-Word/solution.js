function solve() {
  let arrOfWords = JSON.parse(document.getElementById('arr').value);
  let replacementWord = document.getElementById('str').value;

  let firstElWord = arrOfWords[0].split(' ');
  let wordToSearchFor = firstElWord[2].toLowerCase();
  let pattern = new RegExp(wordToSearchFor);

    let resultArr = [];
    arrOfWords.forEach((el) => {
        el = el.toLowerCase();

        resultArr.push(el.replace(pattern, replacementWord));
    });

    resultArr.forEach(el => {
        let p = document.createElement('p');
        p.textContent = el;
        document.getElementById('result').appendChild(p);
    })

}