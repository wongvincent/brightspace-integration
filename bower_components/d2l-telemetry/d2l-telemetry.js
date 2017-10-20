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

		sendPerformance: function(performance, listOfRequiredMetrics) {
			if (!performance) {
				console.warn('D2L.Telemetry.sendPerformance requires entries from D2L.Performance');
				return;
			}
			var perfObj = {};
			performance.forEach(function(perf) {
				//Edge will fail to JSON.stringify(perf) directly, will return empty object string "{}"
				//Map the properties of 'perf' to a new json object resolves it for Edge
				var perfMetricObj = {};
				for (var key in perf) {
					if (typeof perf[key] !== 'function') {
						perfMetricObj[key] = perf[key];
					}
				}
				perfObj[perf.name] = perfMetricObj;
			});

			if (listOfRequiredMetrics) {
				var keys = Object.keys(perfObj);
				if (!D2L.Telemetry.isSubset(keys, listOfRequiredMetrics)) {
					return;
				}
			}

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
			data.page = D2L.Telemetry.getPage();
			data.href = D2L.Telemetry.getHref();
			data.language = window.navigator.language;
			data.size = window.innerWidth + 'x' + window.innerHeight;

			var xhr = new XMLHttpRequest();
			xhr.open('POST', telemetry.telemetryEndpoint);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify(data));
		},

		isSubset: function(superset, subset) {
			return subset.every(function(val) {
				return superset.indexOf(val) >= 0;
			});
		},

		getPage: function() {
			return D2L.Telemetry.removeD2lChangeQueryString(
				window.location.pathname + window.location.search
			);
		},

		getHref: function() {
			return D2L.Telemetry.removeD2lChangeQueryString(window.location.href);
		},

		removeD2lChangeQueryString: function(str) {
			return str.replace(/.d2l_change=./, '');
		}

	};

	window.D2L = window.D2L || {};
	window.D2L.Telemetry = window.D2L.Telemetry || telemetry;
})();
