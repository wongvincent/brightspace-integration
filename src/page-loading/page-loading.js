(function() {
	'use strict';

	addEventListener('load', function() {
		D2L.Performance.measure('d2l.page.preFetch', 'navigationStart', 'fetchStart');
		D2L.Performance.measure('d2l.page.domInteractive', 'fetchStart', 'domInteractive');
		D2L.Performance.measure('d2l.page.domContentLoadedHandlers', 'domContentLoadedEventStart', 'domContentLoadedEventEnd');
		D2L.Performance.measure('d2l.page.load', 'fetchStart', 'loadEventStart');
		D2L.Performance.measure('d2l.page.server', 'requestStart', 'responseStart');
		D2L.Performance.measure('d2l.page.download', 'responseStart', 'responseEnd');
	});

})();
