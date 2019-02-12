function leapYear() {
    let button = document.querySelector('#exercise button');
    let inputField = document.querySelector('#exercise input');

    
    button.addEventListener('click', checkYear);

    function checkYear() {
        let currYear = inputField.value;
        if (isLeapYear(currYear)) {
            document.querySelector('#year h2').textContent = 'Leap Year';
        } else {
            document.querySelector('#year h2').textContent = 'Not Leap Year';
        }
        document.querySelector('#year div').textContent = currYear;
        inputField.value = '';
    }

    function isLeapYear(currYear) {
        return ((currYear % 4 == 0) && (currYear % 100 != 0)) || (currYear % 400 == 0);
    }

}