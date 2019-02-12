function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let inputFields = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            let divEl = document.createElement('div');
            let pEl = document.createElement('p');
            let spanEl = document.createElement('span');

            let senderBtn = event.target.name;

            if (senderBtn === 'myBtn') {
                spanEl.textContent = 'Me';
                pEl.textContent = document.getElementById('myChatBox').value;

                divEl.style.textAlign = 'left';
            } else if (senderBtn === 'peshoBtn') {
                spanEl.textContent = 'Pesho';
                pEl.textContent = document.getElementById('peshoChatBox').value;

                divEl.style.textAlign = 'right';
            }

            divEl.appendChild(spanEl);
            divEl.appendChild(pEl);

            document.getElementById('chatChronology').appendChild(divEl);

            inputFields[0].value = '';
            inputFields[1].value = '';
        })
    })
}