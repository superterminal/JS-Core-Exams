function solve(matrix) {
    let rowSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currRowSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            currRowSum += matrix[row][col];
        }

        if (row === 0) {
            rowSum = currRowSum;
        } else if (rowSum !== currRowSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currColSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            currColSum += matrix[row][col];
        }

        if (currColSum !== rowSum) {
            return false;
        }
    }

    return true;
}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));