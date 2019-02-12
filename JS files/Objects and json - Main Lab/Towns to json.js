function solve(towns) {
    towns.shift();
    let resultArr = [];
    towns.forEach(currRow => {
        let obj = {};
        currRow = currRow.split('|');
        currRow.pop();
        currRow.shift();
        obj['Town'] = currRow[0].trim();
        obj['Latitude'] = +currRow[1].trim();
        obj['Longitude'] = +currRow[2].trim();
        resultArr.push(obj);
    })

    console.log(JSON.stringify(resultArr));

}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);