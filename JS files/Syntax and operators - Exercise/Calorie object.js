function solve(input){

    let obj = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            obj[input[i]] = 0;
        } else {
            obj[input[i - 1]] = +input[i];
        }
    }
    console.log(obj);
}
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);