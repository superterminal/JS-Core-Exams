function solve() {

    let productsObj = {
        'Milk': 0,
        'Bread': 0,
        'Tomatoes':0
    };

    let currButtons = Array.from(document.querySelectorAll('.product'));
    let buyButton = document.querySelector('#exercise > button');
    let textArea = document.querySelector('textarea');

    currButtons.forEach(el => {
        let currBtn = el.children[3];
        let currProduct = el.children[1].textContent;
        currBtn.addEventListener('click', () => {
            if (currProduct === 'Milk') {
                productsObj['Milk'] += 1.09;
                textArea.value += `Added Milk for 1.09 to the cart.\n`;
            } else if (currProduct === 'Bread') {
                productsObj['Bread'] += 0.80;
                textArea.value += `Added Bread for 0.80 to the cart.\n`;
            } else if (currProduct === 'Tomatoes') {
                productsObj['Tomatoes'] += 0.99;
                textArea.value += `Added Tomatoes for 0.99 to the cart.\n`;
            }         
        }) 
    });

    buyButton.addEventListener('click', () => {
        let checkForValidProducts = Object.entries(productsObj).filter(el => {
            if (el[1] !== 0) {
                return true;
            }
        });
        let totalSum = (Object.values(productsObj).reduce((a, b) => a + b)).toFixed(2);
        textArea.value += `You bought ${checkForValidProducts.map(el => el[0]).join(', ')} for ${totalSum}.\n`;
    })
}