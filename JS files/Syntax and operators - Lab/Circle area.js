function solve(rad) {
    let inputType = typeof rad;

    if (inputType === 'number') {
        console.log(((Math.pow(rad, 2)) * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}