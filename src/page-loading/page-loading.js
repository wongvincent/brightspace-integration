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

	addEventListener('load', function() {
		D2L.Performance.measure('d2l.page.preFetch', 'navigationStart', 'fetchStart');
		D2L.Performance.measure('d2l.page.domInteractive', 'fetchStart', 'domInteractive');
		D2L.Performance.measure('d2l.page.domContentLoadedHandlers', 'domContentLoadedEventStart', 'domContentLoadedEventEnd');
		D2L.Performance.measure('d2l.page.load', 'fetchStart', 'loadEventStart');
	});

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
