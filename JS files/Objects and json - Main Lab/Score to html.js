function solve(jsonInput) {
    console.log(`<table>
  <tr><th>name</th><th>score</th></tr>`);
    JSON.parse(jsonInput).forEach(el => {
        let currName = el.name;
        let currScore = el.score;
        console.log(createHtml(currName, currScore));
    });
    console.log(`</table>`)

    function createHtml(name, score) {
        let html = `  <tr><td>${escape(name)}</td><td>${score}</td></tr>`;
        return html;
    }

    function escape(txt) {
        return txt
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    }
}
solve('[{"name":"Pesho&","score":479},{"name":"Gosho","score":205}]')