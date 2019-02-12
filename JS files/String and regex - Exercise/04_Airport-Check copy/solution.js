function solve() {
    let input = document.getElementById('str').value;
    let result = document.getElementById('result');

    let [text, wantedInfo] = input.split(', ');
    let message;
    let namePattern = / ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /;
    let flightNumberPattern = / ([A-Z]{1,3})([0-9]{1,5}) /;
    let companyPattern = /- [A-Z][a-zA-Z]+\*[A-Z][a-zA-Z]+ /;
    let name = text.match(namePattern)[0].replace(/ /g, '')
        .replace(/-/, ' ');
    let flight = text.match(flightNumberPattern)[0].replace(/ /g, '');
    let company = text.match(companyPattern)[0].replace(/ /g, '')
        .replace(/-/, '').replace(/\*/, ' ');
    let airport = text.match(airportPattern)[0].replace(/ /g, '');
    let [startDest, finalDest] = airport.split('/');

    let newBreak = document.createElement('br');

    if(wantedInfo === 'name') {
        message = `Mr/Ms, ${name}, have a nice flight!`;
    }else if(wantedInfo === 'flight') {
        message = `Your flight number ${flight} is from ${startDest} to ${finalDest}.`;
    }else if(wantedInfo === 'company') {
        message = `Have a nice flight with ${company}.`;
    }else if(wantedInfo === 'all') {
        message = `Mr/Ms, ${name}, your flight number ${flight} is from ${startDest} to ${finalDest}. Have a nice flight with ${company}.`;
    }
    result.textContent = message;
}