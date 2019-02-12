function solve(examPoints, hwCompleted, totalHomework) {

    let pointsBeforeHw = ((examPoints / 400) * 0.9) * 100;
    let hw = ((hwCompleted / totalHomework) * 10) + pointsBeforeHw;
    let grade = 3 + 2 * (hw - 20) / 50;

    if (examPoints === 400 || grade > 6) {
        grade = 6;
        console.log(grade.toFixed(2));
        return;
    }

    if (grade <= 6) {
        if (grade < 3) {
            grade = 2;
            console.log(grade.toFixed(2));
            return;
        }
        console.log(grade.toFixed(2))
    }
}

solve(390, 20, 20);
//solve(200, 5, 5);