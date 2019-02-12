function solve() {
    let submitButton = document.getElementsByTagName('button')[0];
    let searchButton = document.getElementsByTagName('button')[1];
    let tableBody = document.querySelector('tbody');

    submitButton.addEventListener('click', (el) => {
        el.preventDefault();
        let buttonsChecked = [];
        let userInfo = document.getElementsByClassName('user-info')[0].children;
        let currName = userInfo[1].value;
        let currEmail = userInfo[5].value;
        
        let radioButtons = [...document.querySelectorAll('input[type="checkbox"]:checked')];
        radioButtons.forEach(el => {
            buttonsChecked.push(el.value);
        })
        let currTr = document.createElement('tr');
        let nameTd = document.createElement('td');
        nameTd.textContent = currName;
        let emailTd = document.createElement('td');
        emailTd.textContent = currEmail;
        let currTopics = document.createElement('td');
        currTopics.textContent = buttonsChecked.join(' ');
        currTr.appendChild(nameTd);
        currTr.appendChild(emailTd);
        currTr.appendChild(currTopics);
        tableBody.appendChild(currTr);
    });

    searchButton.addEventListener('click', (el) =>  {
        el.preventDefault();
        let searchInput = document.querySelector('#exercise > input').value;

        let tds = [...document.querySelectorAll('td')];
        tds.forEach(el => {
            if (el.textContent.includes(searchInput)) {
                el.parentElement.style.visibility = 'visible';
            } else {
                el.parentElement.style.visibility = 'hidden';
            }
        });
    });


}