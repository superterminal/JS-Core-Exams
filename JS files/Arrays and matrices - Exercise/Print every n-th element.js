function solve(arr) {

    let lastEl = +arr.pop();

    // for (let i = 0; i < arr.length; i += lastEl) {
    //     console.log(arr[i]);
    // }

    let result = arr.reduce((acc, currVal, currIndex) => {
        if (currIndex < arr.length) {
            console.log(arr[currIndex]);
            currIndex += 2;
        }
    }, []);

    console.log(result);

}
solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
);