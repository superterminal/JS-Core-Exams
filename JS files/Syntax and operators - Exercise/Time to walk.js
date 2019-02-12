function solve(stepsCount, footPrint, kmh) {

    let distanceInM = stepsCount * footPrint;

    let speedInS = kmh / 3.6;

    let timeS = Math.round(distanceInM / speedInS);

    let rest = Math.floor(distanceInM / 500);
    timeS += rest * 60;

    let seconds = timeS % 60;
    let hour = Math.floor((timeS - seconds) / 3600);
    let minutes = (timeS - seconds) / 60;

    function format(hour, minutes, seconds) {
        if (hour < 10) {
            hour = "0" + hour;
        } 
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        console.log(`${hour}:${minutes}:${seconds}`);
    }

    format(hour, minutes, seconds);
}
solve(4000, 0.60, 5);