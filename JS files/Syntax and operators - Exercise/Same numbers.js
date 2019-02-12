function solve(num) {
    
    let splittedNum = num.toString().split('');
    let counter = 0;
    let totalSum = 0;
    
    for (let i = 0; i <= splittedNum.length; i++) {
        if (splittedNum[i] === splittedNum[i + 1]) {
            counter++;
        }
    }
    for (let j = 0; j < splittedNum.length; j++) {
        totalSum += +splittedNum[j];
    }

    if (counter === splittedNum.length) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(totalSum);
    
}
solve(222222);