(function() {
	'use strict';

	if (!window.performance
		|| !window.performance.mark
		|| !window.performance.measure
		|| !window.performance.getEntriesByName) return;

	var wcReadyFired = false,
		pageLoadedFired = false,
		measured = false;

	function measure(name, startMark, endMark, fireEvent) {
		window.performance.measure(name, startMark, endMark);
		// following should be replaced with PerformanceObserver when IE/Edge support it
		var measure = window.performance.getEntriesByName(name, 'measure');
		if (measure.length === 1 && fireEvent) {
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
		measure('d2l.page-init.preFetch', 'navigationStart', 'fetchStart', false);
		measure('d2l.page-init.domInteractive', 'fetchStart', 'domInteractive', false);
		measure('d2l.page-init.domContentLoadedHandlers', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', false);
		measure('d2l.page-init.load', 'fetchStart', 'loadEventStart', false);
		measure('d2l.page-init.server', 'requestStart', 'responseStart', false);
		measure('d2l.page-init.download', 'responseStart', 'responseEnd', false);
		measure('d2l.page-init.webComponentsReady', 'responseEnd', 'webComponentsReady', true);
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
