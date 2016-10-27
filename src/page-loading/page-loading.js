(function() {
	'use strict';

	var pageReady, pageLoaded, navReady = false;

	function logMeasures() {

		if (!pageReady || !navReady || !pageLoaded) {
			return;
		}

		var timing = performance.timing;
		var measures = {
			'domInteractive': timing.domInteractive - timing.navigationStart,
			'domContentLoaded': timing.domContentLoadedEventEnd - timing.navigationStart,
			'load': timing.loadEventStart - timing.navigationStart
		};

		var custom = D2L.Performance.getEntriesByType('measure');
		for(var i=0; i<custom.length; i++) {
			measures[custom[i].name] = Math.floor(custom[i].duration);
		}

		console.log('measures', measures);

	}

	function check() {
		if (pageReady && navReady) {
			D2L.Performance.measure('d2l.page.display');
			document.body.classList.remove('d2l-page-loading');
			logMeasures();
		}
	}

	function pageIsReady() {

		if (pageReady) {
			return;
		}

		document.body.addEventListener('d2l-navigation-ready', navIsReady);
		var navs = document.getElementsByTagName('d2l-navigation');
		if (navs.length === 0 || !navs[0].hasAttribute('loading')) {
			navIsReady();
		}

		pageReady = true;
		check();

	}

	function navIsReady() {
		if (navReady) {
			return;
		}
		navReady = true;
		check();
	}

	addEventListener('load', function(e) {
		pageLoaded = true;
		logMeasures();
	});

	if (window.WebComponents) {
		addEventListener('WebComponentsReady', function() {
			D2L.Performance.measure('WebComponentsReady');
			pageIsReady();
		});
	} else {
		if (document.readyState === 'interactive' || document.readyState === 'complete') {
			pageIsReady();
		} else {
			addEventListener('DOMContentLoaded', pageIsReady);
		}
	}

	setTimeout(function() {
		pageIsReady();
		navIsReady();
	}, 10000);

})();
