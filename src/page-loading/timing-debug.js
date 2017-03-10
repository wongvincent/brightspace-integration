(function() {
	'use strict';

	var count = 0;

	window.addEventListener('D2LPerformanceMeasure', function addTiming(e) {

		if (e.detail.value.name !== 'd2l.page.visible' && e.detail.value.name !== 'd2l.page.display' ) {
			return;
		}
		count++;

		if (count === 2) {
			window.removeEventListener( 'D2LPerformanceMeasure', addTiming );
		}

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

			var label = e.detail.value.name.substr(e.detail.value.name.lastIndexOf('.') + 1);
			var timingNode = document.createElement('div');
			timingNode.appendChild(
				document.createTextNode(label + ': ' + Math.floor(e.detail.value.duration))
			);

			var div = document.querySelector('.d2l-page-timing');
			if (div === null) {
				div = document.createElement('div');
				div.className = 'd2l-page-timing';
				div.appendChild(timingNode);
				document.body.appendChild(div);
			} else {
				div.appendChild(timingNode);
			}

		});

	});

})();
