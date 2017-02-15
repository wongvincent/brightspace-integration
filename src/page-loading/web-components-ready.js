(function() {
	'use strict';

	var pageReady = false;

	function pageIsReady() {
		if (pageReady) {
			return;
		}
		pageReady = true;
		D2L.Performance.measure('d2l.page.display', 'fetchStart');
	}

	// polyfill in use
	if (window.WebComponents) {
		addEventListener('WebComponentsReady', pageIsReady);
	} else {
		if (document.readyState === 'interactive' || document.readyState === 'complete') {
			pageIsReady();
		} else {
			addEventListener('DOMContentLoaded', pageIsReady);
		}
	}

	setTimeout(pageIsReady, 10000);

})();
