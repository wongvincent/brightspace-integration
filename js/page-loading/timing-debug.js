(function() {
	'use strict';

	window.addEventListener('d2l-performance-measure', function addTiming(e) {

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

			var timingNode = document.createElement('div');
			if (e.detail.value.entryType === 'paint') {
				timingNode.appendChild(
					document.createTextNode(e.detail.value.name + ': ' + Math.floor(e.detail.value.startTime))
				);
			} else {
				timingNode.appendChild(
					document.createTextNode(e.detail.value.name + ': ' + Math.floor(e.detail.value.duration))
				);
			}

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
