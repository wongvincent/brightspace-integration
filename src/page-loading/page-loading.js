(function() {
	'use strict';

	var pageReady, pageLoaded = false;

	function logMeasures() {

		if (!pageReady || !pageLoaded) {
			return;
		}

		D2L.Performance.measure('d2l.page.preFetch', 'navigationStart', 'fetchStart');
		D2L.Performance.measure('d2l.page.domInteractive', 'fetchStart', 'domInteractive');
		D2L.Performance.measure('d2l.page.domContentLoaded', 'domContentLoadedEventStart', 'domContentLoadedEventEnd');
		D2L.Performance.measure('d2l.page.load', 'fetchStart', 'loadEventStart');

	}

	function check() {
		if (!pageReady) {
			return;
		}
		D2L.Performance.measure('d2l.page.display', 'fetchStart');
		document.body.classList.remove('d2l-page-loading');
		logMeasures();
	}

	function pageIsReady() {

		if (pageReady) {
			return;
		}

		pageReady = true;
		check();

	}

	addEventListener('load', function() {
		pageLoaded = true;
		logMeasures();
	});

	if (window.WebComponents) {
		addEventListener('WebComponentsReady', function() {
			D2L.Performance.measure('d2l.page.webComponentsReady', 'fetchStart');
			pageIsReady();
		});
	} else {
		if (document.readyState === 'interactive' || document.readyState === 'complete') {
			pageIsReady();
		} else {
			addEventListener('DOMContentLoaded', pageIsReady);
		}
	}

	setTimeout(pageIsReady, 10000);

})();
