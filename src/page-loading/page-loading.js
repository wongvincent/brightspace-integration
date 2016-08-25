(function() {
	'use strict';

	var pageReady, navReady = false;

	function check() {
		if (pageReady && navReady) {
			document.body.classList.remove('d2l-page-loading');
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
		navReady = true;
		check();
	}

	if (window.WebComponents) {
		addEventListener('WebComponentsReady', pageIsReady);
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
