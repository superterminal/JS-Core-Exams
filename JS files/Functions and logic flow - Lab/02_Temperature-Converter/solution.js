function solve() {
  let degrees = +document.getElementById('num1').value;
  let type = document.getElementById('type').value;
  let convertedTemp = 0;
  let checker = false;
  let result = document.getElementById('result');

  convert(degrees, type);

  if (checker) {
    result.textContent = convert(degrees, type);
  } else {
    result.textContent = 'Error!';
  }

  function convert(deg, tp) {
    if (tp.toLowerCase() === 'fahrenheit') {
      convertedTemp = (((deg - 32) * 5) / 9);
      checker = true;
    } else if (tp.toLowerCase() === 'celsius') {
      convertedTemp = ((deg * 9) / 5) + 32;
      checker = true;
    }
    return Math.round(convertedTemp);
  }
}