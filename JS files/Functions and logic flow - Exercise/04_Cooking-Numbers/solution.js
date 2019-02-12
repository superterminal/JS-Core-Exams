function solve() {

    let input = document.querySelector('#exercise input[type="number"]');
    let output = document.getElementById('output');

    let currentNumber = 0;


    document.querySelector('#operations button:nth-child(1)')
        .addEventListener('click', chop);
    document.querySelector('#operations button:nth-child(2)')
        .addEventListener('click', dice);
    document.querySelector('#operations button:nth-child(3)')
        .addEventListener('click', spice);
    document.querySelector('#operations button:nth-child(4)')
        .addEventListener('click', bake);
    document.querySelector('#operations button:nth-child(5)')
        .addEventListener('click', fillet);


    function getCurrentNumber() {
        currentNumber = output.textContent || input.value;
        return currentNumber;
    }

    function chop() {
        getCurrentNumber();
        currentNumber /= 2;
        output.textContent = String(currentNumber);
    }

    function dice() {
        getCurrentNumber();
        currentNumber = Math.sqrt(currentNumber);
        output.textContent = String(currentNumber);
    }

    function spice() {
        getCurrentNumber();
        ++currentNumber;
        output.textContent = String(currentNumber);
    }

    function bake() {
        getCurrentNumber();
        currentNumber *= 3;
        output.textContent = String(currentNumber);
    }

    function fillet() {
        getCurrentNumber();
        currentNumber = currentNumber - (currentNumber * 0.2);
        output.textContent = String(currentNumber);
    }




}
