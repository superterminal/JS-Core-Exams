function solve(input) {

    let option = input[0];
    let city = input[1];
    let time = input[2];
    let flightNum = input[3];
    let gateNum = input[4];

    console.log(`${option}: Destination - ${city}, Flight - ${flightNum}, Time - ${time}, Gate - ${gateNum}`);
}
solve(['Departures', 'London', '22:45', 'BR117', '42']);