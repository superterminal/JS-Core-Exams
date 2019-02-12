function solve(arr) {

    let amountsOfRotation = +arr.pop();
    let len = amountsOfRotation % arr.length;

    for (let i = 0; i < len; i++) {
        let currEl = arr.pop();
        arr.unshift(currEl);
    }

    console.log(arr.join(' '));

}

solve(['1',
    '2',
    '3',
    '4',
    '2']);