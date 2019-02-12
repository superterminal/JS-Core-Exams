function validate() {
    let button = document.querySelector('#exercise div button');
    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let date = document.getElementById('date');
    let genderMale = document.getElementById('male');
    let genderFemale = document.getElementById('female');
    let regionalCode = document.getElementById('region');

    let weightPos = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    let monthObj = {
        'January': '01',
        'February': '02',
        'March': '03',
        'April': '04',
        'May': '05',
        'June': '06',
        'July': '07',
        'August': '08',
        'September': '09',
        'October': '10',
        'November': '11',
        'December': '12'
    };
    
    button.addEventListener('click', getEgn);

    function getEgn() {

        if (getYear() && getMonth() && getDate() && getGender()
            && (+year.value >= 1900 && +year.value <= 2100)
            && (+getRegionalCode() >= 43 && +getRegionalCode() <= 999)) {

            let egn = getYear() + getMonth() + getDate() + getRegionalCode().slice(0, 2) + getGender();

            let egnCheck = egn.split('').map(Number);
            let sumEgn = 0;

            for (let i = 0; i < 9; i++) {
                sumEgn += ((egnCheck[i]) * (weightPos[i]));
            }

            let checkSum = sumEgn % 11;
            if (checkSum === 10) {
                checkSum = 0;
            }

            egn += checkSum;

            document.getElementById('egn').textContent = `Your EGN is: ${egn}`;

        }

        year.value = '';
        month.options[month.selectedIndex].selected = false;
        date.value = '';
        genderMale.checked = false;
        genderFemale.checked = false;
        regionalCode.value = '';
    }


    function getYear() {
        return year.value.slice(-2);
    }

    function getMonth() {
        return monthObj[month.options[month.selectedIndex].value];
    }

    function getDate() {
        return ('0' + (date.value)).slice(-2);
    }

    function getGender() {
        if (genderMale.checked === true) {
            return '2';
        } else {
            return '1';
        }
    }

    function getRegionalCode() {
        return regionalCode.value;
    }
    
}
