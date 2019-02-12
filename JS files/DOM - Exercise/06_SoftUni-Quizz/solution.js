function solve() {
	let sections = document.getElementsByTagName('section');
	let buttons = document.getElementsByTagName('button');
	let inputFields = document.getElementsByTagName('input');

	let counter = 0;

    buttons[0].addEventListener('click', firstQuestion);
    buttons[1].addEventListener('click', secondQuestion);
    buttons[2].addEventListener('click', thirdQuestion);

    function firstQuestion() {
        for (let btn in inputFields) {
            if (inputFields[btn].checked === true) {
                if (inputFields[btn].value === '2013') {
                    counter++;
                }
                sections[1].classList.remove('hidden');
            }
        }
    }

    function secondQuestion() {
        for (let btn in inputFields) {
            if (inputFields[btn].checked === true) {
                if (inputFields[btn].value === 'Pesho') {
                    counter++;
                }
                sections[2].classList.remove('hidden');
            }
        }
    }

    function thirdQuestion() {
        for (let btn in inputFields) {
            if (inputFields[btn].checked === true) {
                if (inputFields[btn].value === 'Nakov') {
                    counter++;
                }
            }
        }
        if (counter === 3) {
            document.getElementById('result').textContent = 'You are recognized as top SoftUni fan!';
        } else {
            document.getElementById('result').textContent = `You have ${counter} right answers`;
        }
    }
}