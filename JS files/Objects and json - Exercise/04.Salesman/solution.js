function solve() {
  let textAreaArr = document.querySelectorAll('#exercise textarea');
  let buttonsArr = document.querySelectorAll('#exercise button');
  let loadTextArea = textAreaArr[0];
  let buyTextArea = textAreaArr[1];
  let logTextArea = textAreaArr[2];
  let loadButton = buttonsArr[0];
  let buyButton = buttonsArr[1];
  let endDayButton = buttonsArr[2];

  let productsObj = {};

  let totalProfit = 0;

  function load() {
    let inputObj = JSON.parse(loadTextArea.value);
    inputObj.forEach(el => {
      let currName = el.name;
      let currQuantity = el.quantity;
      let currPrice = el.price;
      if (!productsObj.hasOwnProperty(currName)) {
        productsObj[currName] = {'quantity': currQuantity, 'price': currPrice};
      } else {
        productsObj[currName] = {
          'quantity': productsObj[currName].quantity + currQuantity,
          'price': currPrice
        };
      }
      logTextArea.value += `Successfully added ${productsObj[currName]['quantity']} ${currName}. Price: ${productsObj[currName]['price']}\n`;    
    });
  }

  loadButton.addEventListener('click', load);

  function buy() { 
    let inputObj = JSON.parse(buyTextArea.value);
    let currName = inputObj['name'];
    let currQuantity = inputObj['quantity'];
    
    if (productsObj.hasOwnProperty(currName) && productsObj[currName]['quantity'] >= currQuantity) {
        productsObj[currName]['quantity'] -= currQuantity;
        let profitPrice = currQuantity * productsObj[currName]['price'];
        totalProfit += profitPrice;
        logTextArea.value += `${currQuantity} ${currName} sold for ${profitPrice}.\n`;
    } else {
        logTextArea.value += 'Cannot complete order.\n';
    }
  }

  buyButton.addEventListener('click', buy);

  endDayButton.addEventListener('click', end);

  function end() {
    logTextArea.value += `Profit: ${totalProfit.toFixed(2)}.\n`;
    loadButton.removeEventListener('click', load);
    buyButton.removeEventListener('click', buy);
    endDayButton.removeEventListener('click', end);
  }
}