function solve(input) {

    let basicBasicPattern = /^<(\w+)>.*<\/\1>$/g;
    let wordPattern = />(.*?)</g;

    let resultStr = [];
    for (let el of input) {
        let wordMatch = el.match(basicBasicPattern);
        if (wordMatch === null) {
            continue;
        } else {
            let secondMatch = wordMatch[0].match(wordPattern);
            secondMatch.forEach(el => {
                if (el !== '><') {
                    let currEl = el.slice(1, el.length - 1).trim();
                    currEl = currEl.split('');
                    resultStr.push(currEl.join(''));
                }  
            });
        }
    }
    console.log(resultStr.join(' '));
}

solve(['<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is not</p><div>'])