function solve(input) {
    const regex = /\d+/gm;
    const str = input;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            let lastNum = +match.toString().split('').pop();
            if (lastNum === 1 && match < 10) {
                console.log(match.toString() + 'st');
            } else if (lastNum === 2 && match < 10) {
                console.log(match.toString() + 'nd');
            } else if (lastNum === 3 && match < 10) {
                console.log(match.toString() + 'rd');
            } else {
                console.log(match.toString() + 'th');
            }
        });
    }
}
solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.'
);