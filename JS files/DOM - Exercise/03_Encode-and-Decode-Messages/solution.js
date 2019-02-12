function solve() {
	let buttons = document.getElementsByTagName('button');
	let textareas = document.getElementsByTagName('textarea');

	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);

	function encode() {
	    let encodeMsg = textareas[0].value;

	    let newMsg = '';

	    encodeMsg.split('').forEach((c) => {
	        let asciiValue = c.charCodeAt(0) + 1;
	        newMsg += String.fromCharCode(asciiValue);
        });

        textareas[0].value = '';
	    textareas[1].value = newMsg;
    }

    function decode() {
        let decodeMsg = textareas[1].value;

        let newMsg = '';

        decodeMsg.split('').forEach((c) => {
            let asciiValue = c.charCodeAt(0) - 1;
            newMsg += String.fromCharCode(asciiValue);
        });

        textareas[1].value = newMsg;
    }
}