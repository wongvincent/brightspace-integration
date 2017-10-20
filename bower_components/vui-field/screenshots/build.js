var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name, width) {

	var clipRect = page.evaluate(function(n) {
		return document.querySelector('.screenshot-' + n)
			.getBoundingClientRect();
	}, name);

	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  width || clipRect.width,
		height: clipRect.height
	};
	page.render('./screenshots/' + name + '.png');

}

page.open('./test/field.html', function() {
	capture('overview', 375);
	capture('inline');
	capture('required', 375);
	capture('fieldset', 375);
	phantom.exit();
});
