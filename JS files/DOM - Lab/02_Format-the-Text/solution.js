function solve(){

    let text = document.getElementById('input').textContent;
    let textSpl = text.split('.');
    let output = document.getElementById('output');

    if (textSpl.length > 3) {
        for (let i = 0; i < textSpl.length; i += 3) {
            let tempP = document.createElement('p');
            for (let j = 0;j < 3;j++) {
                tempP.textContent += `${textSpl[i+j]}.`;
                output.appendChild(tempP);
            }
        }
    } else {
        let par = document.createElement('p');
        par.textContent = text;
        output.appendChild(par);
    }
}