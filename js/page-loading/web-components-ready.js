(function() {
	'use strict';

	if (!window.performance
		|| !window.performance.mark
		|| !window.performance.measure
		|| !window.performance.getEntriesByName) return;

	var wcReadyFired = false,
		pageLoadedFired = false,
		measured = false;

	function measure(name, startMark, endMark) {
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

	function wcReady() {
		wcReadyFired = true;
		window.performance.mark('webComponentsReady');
		tryMeasure();
	}

	function pageLoaded() {
		pageLoadedFired = true;
		tryMeasure();
	}

	function tryMeasure() {
		if (!wcReadyFired || !pageLoadedFired || measured) return;
		measured = true;
		measure('d2l.page.preFetch', 'navigationStart', 'fetchStart');
		measure('d2l.page.domInteractive', 'fetchStart', 'domInteractive');
		measure('d2l.page.domContentLoadedHandlers', 'domContentLoadedEventStart', 'domContentLoadedEventEnd');
		measure('d2l.page.load', 'fetchStart', 'loadEventStart');
		measure('d2l.page.server', 'requestStart', 'responseStart');
		measure('d2l.page.download', 'responseStart', 'responseEnd');
		measure('d2l.page.visible', 'responseEnd', 'webComponentsReady');
		measure('d2l.page.display', 'fetchStart', 'webComponentsReady');
	}

	if (document.readyState === 'complete') {
		pageLoaded();
	} else {
		addEventListener('load', pageLoaded);
	}

	// polyfill in use
	if (window.WebComponents) {
		addEventListener('WebComponentsReady', wcReady);
	} else {
		if (document.readyState === 'interactive' || document.readyState === 'complete') {
			wcReady();
		} else {
			addEventListener('DOMContentLoaded', wcReady);
		}
	}

	setTimeout(wcReady, 10000);

})();
