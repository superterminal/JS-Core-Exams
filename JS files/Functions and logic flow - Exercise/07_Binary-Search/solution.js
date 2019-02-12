function binarySearch() {
    let intArr = document.getElementById('arr').value.split(', ').map(Number);
    let num = +document.getElementById('num').value;

    document.getElementById('result').textContent = binarySrc(intArr, num);

    function binarySrc(arr, targetValue) {
        let min = 0;
        let max = arr.length - 1;
        let guess = 0;

        while (min <= max) {
            guess = Math.floor((max + min) / 2);

            if (arr[guess] === targetValue) {
                return `Found ${targetValue} at index ${guess}`;
            } else if (arr[guess] < targetValue) {
                min = guess + 1;
            } else if (arr[guess] > targetValue) {
                max = guess - 1;
            }
        }

        return `${targetValue} is not in the array`;
    }

}

