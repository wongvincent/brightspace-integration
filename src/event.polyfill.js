(function() {
	'use strict';

	var isIE = /Trident/.test(navigator.userAgent);
	if (!window.CustomEvent || isIE && typeof window.CustomEvent !== "function") {
		window.CustomEvent = function(inType, params) {
			params = params || {};
			var e = document.createEvent("CustomEvent");
			e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
			return e;
		};
		window.CustomEvent.prototype = window.Event.prototype;
	}
})();
