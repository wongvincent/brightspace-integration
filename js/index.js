import './polyfill/event.polyfill.js';
import Lie from 'lie';
if (typeof Promise === 'undefined') {
	window.Promise = Lie;
}

window.D2L = window.D2L || {};

import D2LIntl from 'd2l-intl';
window.d2lIntl = D2LIntl;

import '../bower_components/jquery-vui-accordion/accordion.js';
import '../bower_components/jquery-vui-change-tracking/changeTracker.js';
import '../bower_components/jquery-vui-change-tracking/changeTracking.js';
import '../bower_components/jquery-vui-collapsible-section/collapsibleSection.js';
import '../bower_components/jquery-vui-more-less/moreLess.js';
import '../bower_components/jquery-vui-scrollspy/scroll-spy.js';
