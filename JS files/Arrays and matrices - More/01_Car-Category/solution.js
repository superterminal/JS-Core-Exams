function solve() {

    let inputArr = JSON.parse(document.getElementById('arr').value);

    let resultDiv = document.getElementById('result');


    let bulgarianArmyRegex = /^(BA) [0-9]{3} [0-9]{3}$/gm;
    let civilProtectionRegex = /^(CP) [0-9]{2} [0-9]{3}$/gm;
    let diplomaticRegex = /^(C|CT) [0-9]{4}$/gm;
    let foreignersRegex = /^(XX) [0-9]{4}$/gm;
    let transientRegex = /^[0-9]{3} [a-zA-z] [0-9]{3}$/gm;
    let sofiaRegex = /^(C|CA|CB) [0-9]{4} [a-zA-z]{1,2}$/gm;
    let provinceRegex = /^[a-zA-z]{1,2} [0-9]{4} [a-zA-Z]{1,2}$/gm;

    let resultObj = {
        'BulgarianArmy': 0,
        'CivilProtection': 0,
        'Diplomatic': 0,
        'Foreigners': 0,
        'Transient': 0,
        'Sofia': 0,
        'Province': 0,
        'Other': 0
    };

    inputArr.forEach(el => {
        if (el.match(bulgarianArmyRegex)) {
            resultObj['BulgarianArmy']++;
        } else if (el.match(civilProtectionRegex)) {
            resultObj['CivilProtection']++;
        } else if (el.match(diplomaticRegex)) {
            resultObj['Diplomatic']++;
        } else if (el.match(foreignersRegex)) {
            resultObj['Foreigners']++;
        } else if (el.match(transientRegex)) {
            resultObj['Transient']++;
        } else if (el.match(sofiaRegex)) {
            resultObj['Sofia']++;
        } else if (el.match(provinceRegex)) {
            resultObj['Province']++;
        } else {
            resultObj['Other']++;
        }
    });

    let sorted = Object.entries(resultObj).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });

    for (let el of sorted) {
        let tempP = document.createElement('p');

        tempP.textContent = `${el[0]} -> ${el[1]}`;

        resultDiv.appendChild(tempP);

    }
}