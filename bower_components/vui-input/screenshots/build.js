var pages = [
	'checkbox',
	'radio',
	'search',
	'select',
	'text',
	'textarea'
];

var page = require('webpage').create();
page.viewportSize = {width: 2000, height: 1000};

function renderPage(index) {

	if(index === pages.length) {
		phantom.exit();
		return;
	}

	var pageName = pages[index];
	page.open('./test/' + pageName + '.html', function() {
		var clipRect = page.evaluate(function () {
			return document.querySelector(".screenshot")
				.getBoundingClientRect();
		});
		page.clipRect = {
			top:    clipRect.top,
			left:   clipRect.left,
			width:  clipRect.width,
			height: clipRect.height
		};
		page.render('./screenshots/' + pageName + '.png');
		renderPage(++index);
	});

}

renderPage(0);
