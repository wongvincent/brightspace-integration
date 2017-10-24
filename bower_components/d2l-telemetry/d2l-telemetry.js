/* eslint no-console:0 */
'use strict';

(function() {
	var telemetry = {

		init: function(telemetryEndpoint, LMSVersion, userId) {
			var sessionIdMatch = document.cookie.match(/d2lSessionVal=([^;]+)/);

			telemetry.telemetryEndpoint = telemetryEndpoint;
			telemetry.LMSVersion = LMSVersion;
			telemetry.sessionId = sessionIdMatch && sessionIdMatch[1] || '';
			telemetry.userId = userId;
		},

		sendPerformance: function(performance) {
			if (!performance) {
				console.warn('D2L.Telemetry.sendPerformance requires entries from D2L.Performance');
				return;
			}
			var perfObj = {};
			performance.forEach(function(perf) {
				perfObj[perf.name] = perf;
			});
			D2L.Telemetry.send({
				eventName: 'timing',
				performance: perfObj
			});
		},

		sendPageview: function() {
			D2L.Telemetry.send({
				eventName: 'pageView'
			});
		},

		send: function(data) {
			if (!telemetry.telemetryEndpoint) {
				console.warn('D2L.Telemetry is not initialized');
				return;
			}
			data = data || {};
			data.userAgentString = window && window.navigator && window.navigator.userAgent;
			data.LMSVersion = telemetry.LMSVersion;
			data.sessionId = telemetry.sessionId;
			data.userId = telemetry.userId;
			data.now = window.performance.now && window.performance.now();
			data.ts = (Date.now() / 1000 | 0);

			data.hostname = window.location.hostname;
			data.page = window.location.pathname + window.location.search;
			data.href = window.location.href;
			data.language = window.navigator.language;
			data.size = window.innerWidth + 'x' + window.innerHeight;

			var xhr = new XMLHttpRequest();
			xhr.open('POST', telemetry.telemetryEndpoint);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify(data));
		}

	};

	window.D2L = window.D2L || {};
	window.D2L.Telemetry = window.D2L.Telemetry || telemetry;
})();
