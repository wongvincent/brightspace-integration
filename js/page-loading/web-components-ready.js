(function() {
	'use strict';

	var pageReady = false;

	function measure(name, startMark, endMark) {
		if (!window.performance
			|| !window.performance.mark
			|| !window.performance.measure
			|| !window.performance.getEntriesByName) return;
		if (!endMark) {
			window.performance.mark(name);
			endMark = name;
		}
		window.performance.measure(name, startMark, endMark);
		// following should be replaced with PerformanceObserver when IE/Edge support it
		var measure = window.performance.getEntriesByName(name, 'measure');
		if (measure.length === 1 ) {
			document.dispatchEvent(new CustomEvent('D2LPerformanceMeasure', {
				bubbles: true,
				detail: { name: name, value: measure[0] }
			}));
		}
	}

	function pageIsReady() {
		if (pageReady) {
			return;
		}
		pageReady = true;
		measure('d2l.page.visible', 'responseEnd');
		measure('d2l.page.display', 'fetchStart');
	}

	function measurePageEvents() {
		measure('d2l.page.preFetch', 'navigationStart', 'fetchStart');
		measure('d2l.page.domInteractive', 'fetchStart', 'domInteractive');
		measure('d2l.page.domContentLoadedHandlers', 'domContentLoadedEventStart', 'domContentLoadedEventEnd');
		measure('d2l.page.load', 'fetchStart', 'loadEventStart');
		measure('d2l.page.server', 'requestStart', 'responseStart');
		measure('d2l.page.download', 'responseStart', 'responseEnd');
	}

	if (document.readyState === 'complete') {
		measurePageEvents();
	} else {
		addEventListener('load', measurePageEvents);
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
