function solve(inputObj) {


    let inputObjArr = JSON.parse(inputObj);

    console.log('<table>');
    inputObjArr.forEach(el => {
        let currkeys = Object.keys(el);
        currkeys.forEach(el => {
            console.log(`<tr><th>Name</th><th>Price</th></tr>`);
        })
    })
    console.log('</table>');
    function escape(txt) {
        return txt
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    }
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');