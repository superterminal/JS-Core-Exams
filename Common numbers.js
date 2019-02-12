function solve(arr1, arr2, arr3) {

    let uniqueNumArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let currEl = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            
            for (let n = 0; n < arr3.length; n++) {

                if (currEl === arr3[n] && currEl === arr2[j]) {
                    uniqueNumArr.push(currEl);
                }
            }
        }

    }

    let sortedUniqueNumArr = uniqueNumArr.sort((a, b) => a - b);
    let addFn = (a, b) => a + b;
    let avg = uniqueNumArr.reduce(addFn, 0) / uniqueNumArr.length;
    let median = 0;

    if ((sortedUniqueNumArr.length + 1) % 2 === 0) {
        median = sortedUniqueNumArr[(sortedUniqueNumArr.length + 1) / 2 - 1]
    } else {
        let half1 = sortedUniqueNumArr[Math.floor((sortedUniqueNumArr.length + 1) / 2)];
        let half2 = sortedUniqueNumArr[Math.floor((sortedUniqueNumArr.length + 1) / 2) - 1];
        median = (half1 + half2) / 2;
    }


    console.log(`The common elements are ${sortedUniqueNumArr.join(', ')}.`);
    console.log(`Average: ${avg}.`);
    console.log(`Median: ${median}.`);

}
solve([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]);