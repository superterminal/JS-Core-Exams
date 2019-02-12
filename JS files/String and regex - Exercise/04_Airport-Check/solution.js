function solve() {

    let inputStr = document.getElementById('str').value.split(', ');
    let resultSpan = document.getElementById('result');
    let str = inputStr[0];
    let printWord = inputStr[1];

    let namePattern = / ([A-Z]([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightPattern = / [A-Z]{1,3}\d{1,5} /g;
    let companyPattern = /- [A-Z]([a-zA-Z])*\*[A-Z]([a-zA-Z])* /g;
        
    let currName = namePattern.exec(str)[0].trim().replace(/-/g, ' ');
    let flightNumber = flightPattern.exec(str)[0].trim();
    let companyName = companyPattern.exec(str)[0].replace(/[ -]/g, '').replace(/[*]/g, ' ');
    let currAirport = airportPattern.exec(str);
    let from = currAirport[1];
    let to = currAirport[2];

    if (printWord === 'name') {
        resultSpan.textContent = `Mr/Ms, ${currName}, have a nice flight!`;
    } else if (printWord === 'flight') {
        resultSpan.textContent = `Your flight number ${flightNumber} is from ${from} to ${to}.`;
    } else if (printWord === 'company') {
        resultSpan.textContent = `Have a nice flight with ${companyName}.`;
    } else if (printWord === 'all') {
        resultSpan.textContent = `Mr/Ms, ${currName}, your flight number ${flightNumber} is from ${from} to ${to}. Have a nice flight with ${companyName}.`;
    }
    
}