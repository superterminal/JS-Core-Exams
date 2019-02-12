function solve() {
    let searchButton = document.getElementById('searchBtn');

    searchButton.addEventListener('click', checkIfValid);

    let arr = Array.from(document.querySelectorAll('tbody tr'));

    function checkIfValid() {
        for (let el in arr) {
            let wordToSearchFor = document.getElementById('searchField').value;
            if (arr[el].textContent.includes(wordToSearchFor)) {
                arr[el].classList.add('select');
            }
        }
        document.getElementById('searchField').value = '';

    }
}