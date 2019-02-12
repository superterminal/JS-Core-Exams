function solve() {
    let mat1 = JSON.parse(document.getElementById('mat1').value);
    let mat2 = JSON.parse(document.getElementById('mat2').value);
    let div = document.getElementById('result');


    let matrixResult = calcMatrix(mat1, mat2);

    for (let i = 0; i < mat1.length; i++) {
        let tempP = document.createElement('p');

        tempP.textContent = matrixResult[i].join(', ');

        div.appendChild(tempP);
    }

    function calcMatrix(mat1, mat2) {
        let result = [];
        for (let i = 0; i < mat1.length; i++) {
            let tempRes = 0;
            let secondTempRes = 0;

            for (let j = 0; j < mat2[i].length; j++) {
                tempRes += mat1[i][j] * mat2[0][j];
                secondTempRes += mat1[i][j] * mat2[1][j];
            }
            result[i] = [tempRes, secondTempRes];
        }

        return result;
    }

}