function solve() {
  let str = document.getElementById('string').value;
  let char = document.getElementById('character').value;
  let counter = 0;

  findOcc(str, char);

  document.getElementById('result')
    .textContent = counter % 2 === 0 
    ? `Count of ${char} is even.` 
    : `Count of ${char} is odd.`;

  function findOcc(string, character) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        counter++;
      }
    }
  }
}