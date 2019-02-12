function solve(input) {

    mostProfit();

    let bestDrivenCar = '';

    function mostProfit() {
        let townsPriceObj = {};
        let resultTown = '';
        input.forEach(el => {
            if (!townsPriceObj.hasOwnProperty(el.town)) {
                townsPriceObj[el.town] = {'price': +el.price, 'count': 1};
            } else {
                townsPriceObj[el.town].price += +el.price;
                townsPriceObj[el.town].count++;
            }
        });
        let townsPriceArr = Object.entries(townsPriceObj);
        let biggestProfit = -10000;
        for (let el of townsPriceArr) {
           if (biggestProfit < el[1].price) {
               biggestProfit = el[1].price;
           }
        }
        let checkForRepeatingPrices = 0;    
        townsPriceArr.forEach(el => {
            if (el[1].price === biggestProfit) {
                checkForRepeatingPrices++;
            }
        })
        if (checkForRepeatingPrices !== 0) {
            townsPriceArr.sort((a, b) => b[1].price - a[1].price);
            resultTown = townsPriceArr[0];
        } else {
            townsPriceArr.sort((a, b) => a[0].localeCompare(b[0]));
            resultTown = townsPriceArr[0];
        }

        console.log(`${townsPriceArr[0][0]} is most profitable - ${townsPriceArr[0][1].price} BGN`);
    }

    let modelsAndVignettes = {};
    let resultTown = '';
    input.forEach(el => {
        if (!modelsAndVignettes.hasOwnProperty(el.model)) {
            modelsAndVignettes[el.model] = {'price': el.price, 'count': 1};
        } else {
            modelsAndVignettes[el.model].price += +el.price;
            modelsAndVignettes[el.model].count++;
        }
    })
    modelsAndVignettes = Object.entries(modelsAndVignettes);
    let biggestProfit = -10000;
    for (let el of modelsAndVignettes) {
        if (biggestProfit < el[1].count) {
            biggestProfit = el[1].count;
        }
    }
    let repeatCounter = 0;
    modelsAndVignettes.forEach(el => {
        if (el[1].count === biggestProfit) {
            repeatCounter++;
        };
    })
    if (repeatCounter !== 0) {
        modelsAndVignettes.sort((a, b) => b[1].price - a[1].price);
        resultTown = modelsAndVignettes[0];
    } else {
        modelsAndVignettes.sort((a, b) => a[0].localeCompare(b[0]));
        resultTown = modelsAndVignettes[0];
    }

    console.log(`Most driven model: ${resultTown[0]}`);
    bestDrivenCar = resultTown[0];
    
    listOfTowns(bestDrivenCar);

    function listOfTowns(bestCar) {
        let bestCarObj = [];
        input.forEach(el => {
            if (el.model === bestCar) {
                if (!bestCarObj.hasOwnProperty(el.town)) {
                    bestCarObj[el.town] = [el.regNumber];
                } else {
                    bestCarObj[el.town].push(el.regNumber);
                }
            } 
        });
        bestCarObj = Object.entries(bestCarObj);
        bestCarObj.sort((a, b) => a[0].localeCompare(b[0]));
        bestCarObj.forEach(el => {
            console.log(`${el[0]}: ${el[1].sort((a, b) => a.localeCompare(b)).join(', ')}`);
        })

    }
}