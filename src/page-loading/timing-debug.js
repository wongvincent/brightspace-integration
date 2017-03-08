(function() {
	'use strict';

	window.addEventListener('D2LPerformanceMeasure', function addTiming(e) {

		if (e.detail.value.name !== 'd2l.page.visible') {
			return;
		}

		window.removeEventListener( 'D2LPerformanceMeasure', addTiming );

		var res = /(\?|&)timingdebug=(1|0)/gi.exec(location.search);
		if ( res !== null && res.length === 3 ) {
			var timingVal = (res[2] === '0') ? false : true;
			try {
				if (timingVal) {
					window.sessionStorage.setItem('TimingDebug', '1');
				} else {
					window.sessionStorage.removeItem('TimingDebug');
				}
			} catch (e) {}
		}

		var timingDebug = false;
		try {
			timingDebug = (window.sessionStorage.getItem('TimingDebug') !== null);
		} catch (e) {}

		if (!timingDebug) {
			return;
		}

		D2L.FastDom.mutate(function() {
			var div = document.createElement('div');
			div.className = 'd2l-page-timing';
			div.appendChild(
				document.createTextNode('Visible: ' + D2L.Performance.timing['d2l.page.visible'])
			);
			document.body.appendChild(div);
		});

	});

})();
