function validate() {
    let monthObj = {
        "January": '01', "February": '02', "March": '03',
        "April": '04', "May": '05', "June": '06',
        "July": '07', "August": '08', "September": '09',
        "October": '10', "November": '11', "December": '12'
    };
    document.getElementsByTagName('button')[0]
        .addEventListener('click', (e) => {
            let year = document.getElementById('year');
            let month = document.getElementById('month');
            let day = document.getElementById('date');
            let male = document.getElementById('male');
            let female = document.getElementById('female');
            let regCode = document.getElementById('region');
            let egn = '';
 
            egn += year.value.slice(-2);
            egn += monthObj[month.value];
            egn += ('0' + day.value).slice(-2);
            egn += regCode.value.slice(0, 2);
            let gender = male.checked ? '2' : (female.checked ? '1' : '');
            egn += gender;

            console.log(egn);
       
            let egnCheck = egn.split('').map(Number);
            let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let weightSumArr = [];

            for (let i = 0; i < 9; i++) {
                weightSumArr.push(egnCheck[i] * weightPosition[i]);
            }

            let weightSumNum = weightSumArr.reduce((a, b) => a + b);
            let weightSum = weightSumNum % 11;
            egn += weightSum !== 10 ? weightSum : '0';
 
            if ((+year.value >= 1900 && +year.value <= 2100)
                && (+regCode.value >= 43 && +regCode.value <= 999)
                && gender && month.value !== 'Select a month') {
               
                document.getElementById('egn').textContent = `Your EGN is: ${egn}`;
                year.value = '';
                month.options[month.selectedIndex].selected = false;
                day.value = '';
                male.checked = false;
                female.checked = false;
                regCode.value = '';
            }
        })
}
