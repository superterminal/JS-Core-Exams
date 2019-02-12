function solve(day, gymType, hour) {

    let result;
    let obj = {
        'Fitness': {
            'Monday': 5.00,
            'Tuesday': 5.00,
            'Wednesday': 5.00,
            'Thursday': 5.00,
            'Friday': 5.00,
            'Saturday': 8.00,
            'Sunday': 8.00
        },
        'Sauna': {
            'Monday': 4.00,
            'Tuesday': 4.00,
            'Wednesday': 4.00,
            'Thursday': 4.00,
            'Friday': 4.00,
            'Saturday': 7.00,
            'Sunday': 7.00
        },
        'Instructor': {
            'Monday': 10.00,
            'Tuesday': 10.00,
            'Wednesday': 10.00,
            'Thursday': 10.00,
            'Friday': 10.00,
            'Saturday': 15.00,
            'Sunday': 15.00
        }
    }

    if ((hour > 15.00 && hour <= 22.00) && (day !== 'Saturday' && day !== 'Sunday')) {
        result = obj[gymType][day] + 2.50;
    } else {
        result = obj[gymType][day];
    }

    console.log(result);
}
solve('Sunday', 'Fitness', 22.00);