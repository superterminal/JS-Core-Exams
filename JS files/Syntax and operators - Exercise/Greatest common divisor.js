function solve(firstNum, secondNum) {

    let temp;
    
    //euclidean algorithm
    while (secondNum != 0) {        
        temp = secondNum;

        secondNum = firstNum % secondNum;

        firstNum = temp;
    }

    console.log(firstNum);

}
solve(5, 15);