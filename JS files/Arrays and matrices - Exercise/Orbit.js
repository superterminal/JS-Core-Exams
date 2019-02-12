function solve([cols, rows, x, y]) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let el of matrix) {
        console.log(el.join(' '));
    }
}
solve([10, 10, 2, 2]);