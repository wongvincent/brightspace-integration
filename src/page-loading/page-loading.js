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

	/*
	 * Try to get the first meaningful paint. The theory here is after DOMContentLoaded:
	 * - all the scripts are loaded and dom manipulations are completed
	 * - the next frame is just before the first meaningful paint
	 * - the frame after is just after the first meaningful paint, and the page is "ready".
	 *   There are a few long frames, but this should be a good estimate.
	 *   The percent error is approximately:
	 *   IE: 1-2% early
	 *   Chrome: 0.5% late
	 */
	addEventListener('DOMContentLoaded', function() {
		(requestAnimationFrame || setTimeout)(function() {
			(requestAnimationFrame || setTimeout)(pageIsReady);
		});
	});

	setTimeout(pageIsReady, 10000);

})();
