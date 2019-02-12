function solve() {
    let user1BtnChecked = document.getElementsByName('user1Locked')[1];
    let button1 = document.getElementsByTagName('button')[0];
    let user1Data = document.getElementById('user1HiddenFields');

    let user2BtnChecked = document.getElementsByName('user2Locked')[1];
    let button2 = document.getElementsByTagName('button')[1];
    let user2Data = document.getElementById('user2HiddenFields');

    let user3BtnChecked = document.getElementsByName('user3Locked')[1];
    let button3 = document.getElementsByTagName('button')[2];
    let user3Data = document.getElementById('user3HiddenFields');

    button1.addEventListener('click', () => {
       if (user1BtnChecked.checked) {
           user1Data.style.display = 'block';
           button1.textContent = 'Hide it';
           hide(button1, user1BtnChecked, user1Data);
       }
    });

    button2.addEventListener('click', () => {
        if (user2BtnChecked.checked) {
            user2Data.style.display = 'block';
            button2.textContent = 'Hide it';
            hide(button2, user2BtnChecked, user2Data);
        }
    });

    button3.addEventListener('click', () => {
        if (user3BtnChecked.checked) {
            user3Data.style.display = 'block';
            button3.textContent = 'Hide it';
            hide(button3, user3BtnChecked, user3Data);
        }
    });

    function hide(btn, radioBtn, data) {
        btn.addEventListener('click', () => {
           if (radioBtn.checked) {
               data.style.display = 'none';
               btn.textContent = 'Show more';
               show(btn,radioBtn,data);
           }
        });
    }

    function show(btn, radioBtn, data) {
        btn.addEventListener('click', () => {
           if (radioBtn.checked) {
               data.style.display = 'block';
               btn.textContent = 'Hide it';
               hide(btn,radioBtn,data);
           }
        });
    }
}