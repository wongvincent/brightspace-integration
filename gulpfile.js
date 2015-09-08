'use strict';

var concat = require('gulp-concat'),
	gulp = require('gulp');

var jsFiles = [
		'bower_components/jquery-vui-accordion/accordion.js',
		'bower_components/jquery-vui-change-tracking/changeTracker.js',
		'bower_components/jquery-vui-change-tracking/changeTracking.js',
		'bower_components/jquery-vui-collapsible-section/collapsibleSection.js',
		'bower_components/jquery-vui-more-less/moreLess.js',
		'bower_components/jquery-vui-scrollspy/scroll-spy.js'
	];

gulp.task('javascript', function() {
	return gulp.src( jsFiles )
		.pipe( concat('bsi.js') )
		.pipe( gulp.dest('./dist') )
		/*.pipe( jsmin() )
		.pipe( rename( { suffix: '.min' } ) )*/
		.pipe( gulp.dest('./dist') );
});
