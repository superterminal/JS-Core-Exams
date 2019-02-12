function solve() {

    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let selectedCardType = document.querySelector('select');
    let button = document.querySelector('#exercise button');
    let results = document.getElementById('cards');


    button.addEventListener('click', printCards);

    let cardsObj = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    function printCards() {
        let cardd = selectedCardType.options[selectedCardType.selectedIndex];
        //let cardType = selectedCardType.options[selectedCardType.selectedIndex].value;
        let fromValue = cardsObj[from.value];
        let toValue = cardsObj[to.value];
        let createDiv;
        let cardValue;
        let p1, p2, p3;


        for (let i = fromValue; i <= toValue; i++) {
            createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'card');

            if(i > 10){
                cardValue = Object.keys(cardsObj).filter((v) => cardsObj[v] === i)[0];
            } else {
                cardValue = i;
            }
            p1 = document.createElement('p');
            p2 = document.createElement('p');
            p3 = document.createElement('p');

            p1.textContent = cardd.textContent.split(' ')[1];
            p2.textContent = cardValue;
            p3.textContent = cardd.textContent.split(' ')[1];

            createDiv.appendChild(p1);
            createDiv.appendChild(p2);
            createDiv.appendChild(p3);

            results.appendChild(createDiv);
        }

        from.value = '';
        to.value = '';

    }


}