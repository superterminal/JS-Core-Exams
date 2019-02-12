 function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let pattern = /(.+)@(.+).(com|bg)/gm;
    let result = document.getElementById('result');

    if (username !== '' && pass !== '' && pattern.test(email)) {
        let currh1 = document.createElement('h1');
        currh1.textContent = 'Successful Registration!';
        let currPass = () => {
            let result = '';
            for (let i = 0; i < pass.length; i++) {
                result += '*';
            }
            return result;
        };

        result.appendChild(currh1);
        result.innerHTML += `Username: ${username}`;
        result.appendChild(document.createElement('br'));
        result.innerHTML += `Email: ${email}`;
        result.appendChild(document.createElement('br'));
        result.innerHTML += `Password: ${currPass()}`;

        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
        }, 5000)
    }
 }
