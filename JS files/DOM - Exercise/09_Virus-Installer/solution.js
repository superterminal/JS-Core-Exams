function solve() {
    let nextBtn = document.querySelector('#buttons button:nth-child(1)');
    let cancelBtn = document.querySelector('#buttons button:nth-child(2)');
    let radioBtnAgree = document.querySelectorAll('#firstStep input[type="radio"]');
    nextBtn.addEventListener('click', currEvent);
    cancelBtn.addEventListener('click', cancelEverything);

    let counter = 0;

    function currEvent() {
        if (counter === 0) {
            firstStep();
        } else if (counter === 1 && radioBtnAgree[0].checked) {
            secondStep();
        } else if (counter === 2){
            thirdStep();
        }
    }

    function firstStep() {
        document.getElementById('content').style.background = '0';
        document.getElementById('firstStep').style.display = 'block';
        counter++;
    }    

    function secondStep() {
        document.getElementById('firstStep').style.display = 'none';
        document.getElementById('secondStep').style.display = 'block';
        nextBtn.style.display = 'none';
        counter++;
        setTimeout(() => {
            nextBtn.style.display = 'inline';
        }, 3000);
    }

    function thirdStep() {
        document.getElementById('secondStep').style.display = 'none';
        document.getElementById('thirdStep').style.display = 'block';
        nextBtn.style.display = 'none';
        cancelBtn.textContent = 'Finish';
    }

    function cancelEverything() {
        document.querySelector('#exercise section').style.display = 'none';
    }
}