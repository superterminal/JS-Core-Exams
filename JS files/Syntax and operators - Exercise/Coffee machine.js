function solve(input) {

    let obj = {
        'caffeine': 0.80,
        'decaf':0.90
    };

    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let sugarCount = 0;
        let milkPrice = 0;
        let totalPrice = 0;
        let sugarChecker = false;

        let currentOrder = input[i].split(', ');
        //console.log(currentOrder);
        let coinsInserted = +currentOrder[0];
        let typeOfDrink = currentOrder[1];
        if (typeOfDrink === 'coffee') {
            let typeOfCoffee = currentOrder[2];
            if (currentOrder[3] === 'milk') {
                milkPrice = +(obj[typeOfCoffee] * 0.1).toFixed(1);
                sugarCount = +currentOrder[4];
                //console.log(milkPrice);
                if (sugarCount > 0) {
                    sugarChecker = true;
                }
                if (sugarChecker === true) {
                    totalPrice = milkPrice + obj[typeOfCoffee] + 0.1;
                } else {
                    totalPrice = milkPrice + obj[typeOfCoffee];
                }
            } else {
                sugarCount = +currentOrder[3];
                if (sugarCount > 0) {
                    sugarChecker = true;
                }
                if (sugarChecker === true) {
                    totalPrice = obj[typeOfCoffee] + 0.1; 
                } else {
                    totalPrice = obj[typeOfCoffee];
                }
            }
        } else if (typeOfDrink === 'tea') {
            if (currentOrder[2] === 'milk') {
                milkPrice = +(0.80 * 0.1).toFixed(1);
                sugarCount = +currentOrder[3];
                //console.log(milkPrice);
                if (sugarCount > 0) {
                    sugarChecker = true;
                }
                if (sugarChecker === true) {
                    totalPrice = milkPrice + 0.80 + 0.1;                    
                } else {
                    totalPrice = milkPrice + 0.80;
                }
            } else {
                sugarCount = +currentOrder[2];
                if (sugarCount > 0) {
                    sugarChecker = true;
                }
                if (sugarChecker === true) {
                    totalPrice = 0.80 + 0.1;                    
                } else {
                    totalPrice = 0.80;
                }
            }
        }
    
        if (coinsInserted >= totalPrice) {
            console.log(`You ordered ${typeOfDrink}. Price: ${totalPrice.toFixed(2)}$ Change: ${(coinsInserted - totalPrice).toFixed(2)}$`)
            total += totalPrice;
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(totalPrice - coinsInserted).toFixed(2)}$ more.`);
        }
        
    }

    console.log(`Income Report: ${total.toFixed(2)}$`);
}
solve(['8.00, coffee, decaf, 4',
'1.00, tea, 2']);