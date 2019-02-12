function solve() {

    let dropDownMenu = document.getElementById('selectMenuTo');
    let inputNum = document.getElementById('input');
    let button = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'binary';
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'hexadecimal';

    dropDownMenu.appendChild(binaryOption);
    dropDownMenu.appendChild(hexadecimalOption);

    button.addEventListener('click', convert);

    function convert() {
        if (dropDownMenu.value !== '' && inputNum.value.length !== 0) {
            if (dropDownMenu.value === 'binary') {
                result.value = decToBinary(inputNum.value);
            } else {
                result.value = decToHexa(inputNum.value);
            }
        }
    }

    function decToBinary(dec) {
        return Number(dec).toString(2);
    }

    function decToHexa(num) {
        return Number(num).toString(16).toUpperCase();
    }

}
