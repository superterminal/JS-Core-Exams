function solve(personData, workoutsCount) {
    let gender = personData[0];
    let weight = personData[1];
    let height = personData[2];
    let age = personData[3];

    let manCalorieCalc = 66 + (13.8 * weight) + (5 * height) - (6.8 * age);
    let womenCalorieCalc  = 655 + (9.7 * weight) + (1.85 * height) - (4.7 * age);

    let obj = { 
        'f': womenCalorieCalc,
        'm': manCalorieCalc
    };

    let af = 0;
    if (workoutsCount === 0) {
        af = 1.2;
    } else if (workoutsCount === 1 || workoutsCount === 2) {
        af = 1.375;
    } else if (workoutsCount >= 3 && workoutsCount <= 5) {
        af = 1.55;
    } else if (workoutsCount === 6 && workoutsCount === 7) {
        af = 1.725;
    } else {
        af = 1.90;
    }
    console.log(`${Math.round(obj[gender] * af)}`);
    
}
solve(['f', 46, 157, 32], 5);