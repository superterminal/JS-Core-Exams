function solve(inputArr, command) {
    let header = inputArr.shift();
    let splCommand = command.split(' ');

    switch(splCommand[0]) {
        case 'hide':
            hide(splCommand[1]);
            print();
            break;
        case 'sort':
            sort(splCommand[1]);
            print();
            break;
        case 'filter':
            filter(splCommand[1], splCommand[2]);
            break;        
    }

    function print() {
        console.log(header.join(' | '));
        inputArr.forEach(el => {
            console.log(el.join(' | '));
        })
    }

    function hide(currHeader) {
        let currColIndex = header.indexOf(currHeader);
        inputArr.forEach(el => el.splice(currColIndex, 1)); 
        header.splice(currColIndex, 1);
    }

    function sort(currHeader) {
        let currColIndex = header.indexOf(currHeader);
        inputArr.sort((a, b) => a[currColIndex].localeCompare(b[currColIndex]));
    }

    function filter(currHeader, value) {
        let currColIndex = header.indexOf(currHeader);
        console.log(header.join(' | '));
        for (let el of inputArr) {
            for (let i = 0; i < el.length;i++) {
                if (el[i] === value && i === currColIndex) {
                    console.log(el.join(' | '));
                }
            }
        }
    }
}

solve([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
'filter firstName Marry');