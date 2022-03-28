let currentPage = localStorage.getItem("super-googology-page") ?? 0;

function updatePage(to, scroll = true) {
	if (!pages[to]) return;
	currentPage = to;

	localStorage.setItem("super-googology-page", currentPage);

	if (scroll) document.body.scrollTop = 0;

	document.getElementById("content").innerHTML = pages[currentPage];
	MathJax.typeset();
}

updatePage(currentPage, false);