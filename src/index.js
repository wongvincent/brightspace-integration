'use strict';

require('../node_modules/lie/dist/lie.polyfill.min.js');
require('../bower_components/d2l-performance/d2l-performance.js');
require('../bower_components/jquery-vui-accordion/accordion.js');
require('../bower_components/jquery-vui-change-tracking/changeTracker.js');
require('../bower_components/jquery-vui-change-tracking/changeTracking.js');
require('../bower_components/jquery-vui-collapsible-section/collapsibleSection.js');
require('../bower_components/jquery-vui-more-less/moreLess.js');
require('../bower_components/jquery-vui-scrollspy/scroll-spy.js');
require('../bower_components/d2l-telemetry/d2l-telemetry.js');
require('./page-loading/page-loading.js');

window.BSI = window.BSI || {};
window.BSI.Intl = require('d2l-intl');
