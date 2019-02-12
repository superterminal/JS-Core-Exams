function solve() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;
	let articles = document.getElementById('articles');

	if (title !== '' && content !== '') {
		let article = document.createElement('article');
		let h3 = document.createElement('h3');
		let p = document.createElement('p');

		h3.textContent = title;
		p.textContent = content;

		article.appendChild(h3);
		article.appendChild(p);

		articles.appendChild(article);

		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';
	}

}