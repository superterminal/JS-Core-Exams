function validate() {
    
    document.querySelector('#exercise > fieldset > div > button')
        .addEventListener('click', validateNumber);

    let weightArr = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;

    function validateNumber() {
        let inputNum = document.querySelector('#exercise > fieldset > div > input').value;

        let lastDigit = inputNum[inputNum.length - 1];
        
        for (let i = 0; i < 9; i++) {
            let currNum = inputNum[i];
            let weightNum = weightArr[i];

            sum += currNum * weightNum;
        }

        let remainder = sum % 11;
        if (remainder === 10) {
            remainder = 0;
        }

        let result = document.getElementById('response');

        if (+lastDigit === remainder) {
            result.textContent = 'This number is Valid!';
        } else {
            result.textContent = 'This number is NOT Valid!';
        }
    }


}