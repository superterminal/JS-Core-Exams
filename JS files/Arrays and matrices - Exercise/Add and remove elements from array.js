function solve(commands) {

    let initNumber = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === 'add') {
            arr.push(initNumber);
        } else if (commands[i] === 'remove') {
            arr.pop();
        }

        initNumber++;

    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }

}

solve(['add',
    'add',
    'add']
);