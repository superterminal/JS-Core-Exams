function solve() {
  let furnitureDiv = document.getElementById('furniture-list');
  let inputfields = document.querySelectorAll('#exercise textarea');
  let buttons = document.querySelectorAll('#exercise button');
  let generateButton = buttons[0];
  let buyButton = buttons[1];
  let generateFurnitureTextArea = inputfields[0];
  let printTextArea = inputfields[1];

  let totalPrice = 0;
  let totalDecFactor = 0;

  
  generateButton.addEventListener('click', () => {
    let furnitures = JSON.parse(generateFurnitureTextArea.value);

    furnitures.forEach(el => {
      let div = document.createElement('div');
      div.setAttribute('class', 'furniture');
      let name = document.createElement('p');
      name.textContent = `Name: ${el.name}`;
      let img = document.createElement('img');
      img.src = el.img;
      let price = document.createElement('p');
      price.textContent = `Price: ${el.price}`;
      let decFactor = document.createElement('p');
      decFactor.textContent = `Decoration factor: ${el.decFactor}`;
      let checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      div.appendChild(name);
      div.appendChild(img);
      div.appendChild(price);
      div.appendChild(decFactor);
      div.appendChild(checkBox);
      furnitureDiv.appendChild(div);
    })
  })

  buyButton.addEventListener('click', () => {
    let totalProducts = [];
      let checkedElements = [...document.querySelectorAll('input:checked')];
      checkedElements.forEach(currEl => {
        let productName = currEl.parentNode.children[0].textContent.split(': ')[1];
        let productPrize = currEl.parentNode.children[2].textContent.split(': ')[1];
        let decFactor = currEl.parentNode.children[3].textContent.split(': ')[1];
        totalProducts.push(productName);
        totalPrice += +productPrize;
        totalDecFactor += +decFactor;
      });
    printTextArea.value += `Bought furniture: ${totalProducts.join(', ')}\n`;
    printTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    printTextArea.value += `Average decoration factor: ${totalDecFactor / totalProducts.length}`;
    totalPrice = 0;
    totalDecFactor = 0;
  });
}