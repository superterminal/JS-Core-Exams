function solve() {
    let levskiButtons = Array.from(document.querySelectorAll('.Levski .seat'));
    let litexButtons = Array.from(document.querySelectorAll('.Litex .seat'));
    let vipButtons = Array.from(document.querySelectorAll('.VIP .seat'));
    let summaryButton = document.querySelector('#summary button');
    let output = document.getElementById('output');
    let profit = 0;
    let fanNumbers = 0;

    levskiButtons.forEach(el => el.addEventListener('click', () => {
        let currBtnIndex = el.parentElement.cellIndex;

        let currZone = '';
        if (currBtnIndex === 0) {
            currZone = 'A';
            profit += 10;
        } else if (currBtnIndex === 1) {
            currZone = 'B';
            profit += 7;
        } else if (currBtnIndex === 2) {
            currZone = 'C';
            profit += 5;
        }

        if (el.style.backgroundColor !== 'rgb(255, 0, 0)') {
            output.value += ` Seat ${el.textContent} in zone Levski sector ${currZone} was taken.\n`;
            el.style.backgroundColor = 'rgb(255, 0, 0)';
            fanNumbers++;
        } else {
            output.value += ` Seat ${el.textContent} in zone Levski sector ${currZone} is unavailable.\n`;           
        }
    }));

    litexButtons.forEach(el => el.addEventListener('click', () => {
        let currBtnIndex = el.parentElement.cellIndex;
        
        let currZone = '';
        if (currBtnIndex === 0) {
            currZone = 'A';
            profit += 10;
        } else if (currBtnIndex === 1) {
            currZone = 'B';
            profit += 7;
        } else if (currBtnIndex === 2) {
            currZone = 'C';
            profit += 5;
        }

       if (el.style.backgroundColor !== 'rgb(255, 0, 0)') {
           output.value += ` Seat ${el.textContent} in zone Litex sector ${currZone} was taken.\n`;
           el.style.backgroundColor = 'rgb(255,0,0)';
           fanNumbers++;
       } else {
           output.value += ` Seat ${el.textContent} in zone Litex sector ${currZone} is unavailable.\n`;           
       }
    }));

    vipButtons.forEach(el => el.addEventListener('click', () => {
        let currBtnIndex = el.parentElement.cellIndex;
        
        let currZone = '';
        if (currBtnIndex === 0) {
            currZone = 'A';
            profit += 25;
        } else if (currBtnIndex === 1) {
            currZone = 'B';
            profit += 15;
        } else if (currBtnIndex === 2) {
            currZone = 'C';
            profit += 10;
        }

        if (el.style.backgroundColor !== 'rgb(255, 0, 0)') {
            output.value += ` Seat ${el.textContent} in zone VIP sector ${currZone} was taken.\n`;
            el.style.backgroundColor = 'rgb(255,0,0)';
            fanNumbers++;
        } else {
            output.value += ` Seat ${el.textContent} in zone VIP sector ${currZone} is unavailable.\n`;           
        }
    }));

    summaryButton.addEventListener('click', () => {
        document.querySelector('#summary span').textContent = `${profit} leva, ${fanNumbers} fans.`; 
    })
}