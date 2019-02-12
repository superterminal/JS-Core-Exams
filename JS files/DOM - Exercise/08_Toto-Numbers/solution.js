function solve() {
	let totoNumbers = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    let allNums = document.getElementById('allNumbers');

    button.addEventListener('click', validateTotoNumbers);

    function validateTotoNumbers() {
        totoNumbers = totoNumbers.value.split(' ').map(Number);
        let counter = 0;
        if (totoNumbers.length === 6) {
            for (let num of totoNumbers) {
                if (num >= 1 && num <= 49) {
                    counter++;
                }
            }
        }
        if (counter === 6) {
            for (let i = 1; i < 50; i++) {
                let tempDiv = document.createElement('div');
                tempDiv.textContent = i;
                tempDiv.classList.add('numbers');
                if (totoNumbers.includes(i)) {
                    tempDiv.style.backgroundColor = 'orange';
                }
                allNums.appendChild(tempDiv);
            }
        }
        document.getElementsByTagName('input')[0].disabled = true;
        document.getElementsByTagName('button')[0].disabled = true;
    }

}