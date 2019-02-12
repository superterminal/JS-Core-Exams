function solve() {
    let inputArr = JSON.parse(document.getElementById('arr').value);
    let resultSpan = document.getElementById('result');
    let wordToSearchFor = inputArr[0];
    inputArr.shift();

    let pattern = /( |^)([A-Za-z]+)\s+(([A-Z!#$%]){8,})( |\.|,|$)/gm;
    let matches = [];

    inputArr.forEach(el => {
        let m;

        if ((m = pattern.exec(el)) !== null) {
            let currMatch = (m[0].trim().toLowerCase().split(' ')) 
            if (currMatch[0] === wordToSearchFor.toLowerCase()) {
                let currWordInEl = currMatch[1];
                let replacingWord = m[3];
                console.log(m);
                matches.push(el.replace(replacingWord, decode(currWordInEl)));
            } 
        } else {
            matches.push(el);
        }

    });

    matches.forEach(e => appendChildEl(e));

    function decode(el) {
        el = el.replace(/!/g, '1');
        el = el.replace(/%/g, '2');
        el = el.replace(/#/g, '3');
        el = el.replace(/\$/g, '4');
        return el.toLowerCase();
    }

    function appendChildEl(el) {
        let tempP = document.createElement('p');
        tempP.textContent = el;
        resultSpan.appendChild(tempP);
    }

    //console.log(matches);
}