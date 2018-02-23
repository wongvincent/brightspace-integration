'use strict';

window.D2L = window.D2L || {};

require('../node_modules/lie/dist/lie.polyfill.min.js');
require('./event.polyfill.js');
window.D2L.FastDom = require('./d2l-fastdom.js');
require('../bower_components/d2l-performance/d2l-performance.js');
require('../bower_components/jquery-vui-accordion/accordion.js');
require('../bower_components/jquery-vui-change-tracking/changeTracker.js');
require('../bower_components/jquery-vui-change-tracking/changeTracking.js');
require('../bower_components/jquery-vui-collapsible-section/collapsibleSection.js');
require('../bower_components/jquery-vui-more-less/moreLess.js');
require('../bower_components/jquery-vui-scrollspy/scroll-spy.js');
require('./page-loading/page-loading.js');
require('./page-loading/timing-debug.js');

window.d2lIntl = require('d2l-intl');
