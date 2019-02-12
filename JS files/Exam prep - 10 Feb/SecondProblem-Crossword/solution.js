function solve() {
   let outputP = document.querySelector('#output p');
   let inputText = document.getElementById('input');
   let filterButton = document.querySelector('#filter button');
   let sortButton = document.querySelector('#sort button');
   let rotateButton = document.querySelector('#rotate button');
   let getButton = document.querySelector('#get button');

   filterButton.addEventListener('click', () => {
      let currInput = inputText.value;
      let secondaryCommand = document.getElementById('filterSecondaryCmd').value;
      let secondaryPosition = Number(document.getElementById('filterPosition').value);
      let tempResult = '';
      let temp = '';

      if (secondaryCommand === 'uppercase') {
         let pattern = /[A-Z]+/g;
         temp = currInput.split('').filter((el) => el.match(pattern));
         tempResult = temp[secondaryPosition - 1];
      } else if (secondaryCommand === 'lowercase') {
         let pattern = /[a-z]+/g
         temp  = currInput.split('').filter((el) => el.match(pattern));
         tempResult = temp[secondaryPosition - 1];
      } else if (secondaryCommand === 'nums') {
         let pattern = /[0-9]+/g
         temp  = currInput.split('').filter((el) => el.match(pattern));
         tempResult = temp[secondaryPosition - 1];
      }

      outputP.textContent += tempResult;      
   });

   sortButton.addEventListener('click', () => {
      let currInput = inputText.value;
      let secondaryCommand = document.getElementById('sortSecondaryCmd').value;
      let secondaryPosition = Number(document.getElementById('sortPosition').value);
      let tempResult = '';

      if (secondaryCommand === 'A') {
         let temp = currInput.split('').sort((a, b) => a.localeCompare(b)).join('');
         tempResult = temp[secondaryPosition - 1];
      } else if (secondaryCommand === 'Z') {
         let temp = currInput.split('').sort((a, b) => b.localeCompare(a)).join('');
         tempResult = temp[secondaryPosition - 1];
      }

      outputP.textContent += tempResult;
      
   });

   rotateButton.addEventListener('click', () => {
      let currInput = inputText.value;
      let secondaryCommand = Number(document.getElementById('rotateSecondaryCmd').value);
      let secondaryPosition = Number(document.getElementById('rotatePosition').value);
      
      currInput = currInput.split('');

      for (let i = 0; i < secondaryCommand; i++) {
         currInput.unshift(currInput.pop());
      }

      outputP.textContent += currInput[secondaryPosition - 1];
   });

   getButton.addEventListener('click', () => {
      let currInput = inputText.value;
      let getPosition = Number(document.getElementById('getPosition').value);

      outputP.textContent += currInput[getPosition - 1];
   });
}