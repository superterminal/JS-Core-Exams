function solve() {

    let firstStr = document.getElementById('str1').value;
    let secondStr = document.getElementById('str2').value;

    pascalOrCamelCase(firstStr, secondStr);

    function pascalOrCamelCase(inputStr, caseOption) {

        let resultText = inputStr
            .toLowerCase()
            .split(' ')
            .filter(x => x)
            .map(currWord => currWord.charAt(0).toUpperCase() + currWord.slice(1))
            .join('');

        if (caseOption === 'Camel Case' || caseOption === 'Pascal Case') {
            if (caseOption === 'Camel Case') {
                resultText = resultText.charAt(0).toLowerCase() + resultText.slice(1);
            }
            document.getElementById('result').textContent = resultText;
        } else {
            document.getElementById('result').textContent = 'Error!';
        }

    }
}