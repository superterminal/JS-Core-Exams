function solve(fruitType, weight, pricePerKilo) {
    console.log(`I need ${(weight * pricePerKilo / 1000).toFixed(2)} leva to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`);
}
solve('apple', 1563, 2.35);
// function solve(fruit,weight,price) {
//     let kilograms = weight / 1000;
//     kilograms = kilograms.toFixed(2);
//     let cena = (price * weight) / 1000;
//     cena = cena.toFixed(2);
//     console.log(`I need ${cena} leva to buy ${kilograms} kilograms ${fruit}.`)
// }
// solve('apple', 1563, 2.35);