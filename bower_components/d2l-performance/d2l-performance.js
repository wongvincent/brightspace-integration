/* eslint no-console: 0 */

(function() {
	'use strict';

	var performance = {

		_markIndex: {},

		_entries: [],

		mark: function(name) {

			if (window.performance.mark) {

				window.performance.mark(name);

			} else {

				if (!name) {
					console.warn('performance.mark: "name" is required.');
					return;
				}
				if (this._markIndex[name]) {
					console.warn('performance.mark: "' + name + '" already exists.');
					return;
				}

				var mark = {
					name: name,
					entryType: 'mark',
					startTime: window.performance.now(),
					duration: 0
				};

				this._entries.push(mark);
				this._markIndex[name] = mark;

			}

		},

		measure: function(name, startMark, endMark) {

			var measure;

			if (window.performance.measure) {

				/* required for FF - name of measure should not exist */
				if (window.performance.timing[name]) {
					console.warn('performance.measure: "' + name + '" is an existing entry.');
					return;
				}

				/* contrary to spec, start & end marks are not optional in IE */
				if (!startMark) {
					startMark = 'navigationStart';
				}
				if (!endMark) {
					this.mark(name);
					endMark = name;
				}

				window.performance.measure(name, startMark, endMark);

				var measures = window.performance.getEntriesByName(name, 'measure');
				if (!measures || measures.length === 0) {
					return;
				}
				measure = measures[measures.length - 1];

			} else {

				if (!name) {
					console.warn('performance.measure: "name" is required.');
					return;
				}

				var startTime = this._getMarkTime(startMark, 0);
				var endTime = this._getMarkTime(endMark, window.performance.now());

				measure = {
					name: name,
					entryType: 'measure',
					startTime: startTime,
					duration: endTime - startTime
				};

				this._entries.push(measure);

			}

			this.timing[name] = Math.floor(measure.duration);

			document.dispatchEvent(new CustomEvent('D2LPerformanceMeasure', {
				bubbles: true,
				detail: { name: name, value: measure }
			}));

		},

		getEntries: function() {
			if (window.performance.getEntries) {
				return window.performance.getEntries();
			} else {
				return this._entries;
			}
		},

		getEntriesByName: function(name, type) {

			if (window.performance.getEntriesByName) {

				return window.performance.getEntriesByName(name, type);

			} else {

				if (!name) {
					console.warn('performance.getEntriesByName: "name" is required.');
					return [];
				}

				if (type) {
					return this._entries.filter(function(entry) {
						return (entry.name === name && entry.entryType === type);
					});
				} else {
					return this._entries.filter(function(entry) {
						return (entry.name === name);
					});
				}

			}

		},

		getEntriesByType: function(type) {

			if (window.performance.getEntriesByType) {

				return window.performance.getEntriesByType(type);

			} else {

				if (!type) {
					console.warn('performance.getEntriesByType: "type" is required.');
					return [];
				}

				return this._entries.filter(function(entry) {
					return (entry.entryType === type);
				});

			}
		},

		timing: {},

		_getMarkTime: function(name, defaultTime) {

			/* basic timing markers are in miliseconds since the UNIX epoch, while
			performance.now() returns time since navigationStart, so need convert value
			so that all values are relative to same point in time. */
			if (window.performance.timing[name]) {
				return window.performance.timing[name] - window.performance.timing.navigationStart;
			}

			var mark = this._markIndex[name];
			if (mark) {
				return mark.startTime;
			}

			if (!name) {
				return defaultTime;
			}

		},

		getComponentCounts: function(scopeElement, ignoreShadow) {

			var counts = { total: 0 };

			var countComponents = function(elems) {
				for (var i = 0; i < elems.length; i++) {
					var elem = elems[i], name = null;
					if (elem.localName.indexOf('-') !== -1) {
						name = elem.localName;
					} else {
						var isAttr = elem.getAttribute('is');
						if (isAttr && isAttr.indexOf('-') !== -1) {
							name = isAttr;
						}
					}
					if (name) {
						if (!counts[name]) {
							counts[name] = 1;
						} else {
							counts[name] += 1;
						}
						counts.total += 1;
					}
					if (!ignoreShadow && elem.shadowRoot) {
						countComponents(elem.shadowRoot.querySelectorAll('*'));
					}
				}
			};

			if (scopeElement) {
				countComponents(scopeElement.querySelectorAll('*'));
			} else {
				countComponents(document.querySelectorAll('html *'));
			}

			return counts;

		}

	};

	window.D2L = window.D2L || {};
	window.D2L.Performance = window.D2L.Performance || performance;

})();
