'use strict';

var opts = {
	targetDirectory: 'bsi',
	creds: {
		key: 'AKIAIZGPQIRSA2WEJEDA',
		secret: process.env.CDN_SECRET
	},
	version: process.env.TRAVIS_TAG
};

var concat = require('gulp-concat'),
	gulp = require('gulp'),
	pg = require('peanut-gallery'),
	publisher = require('gulp-frau-publisher').lib(opts);

var jsFiles = [
		'bower_components/jquery-vui-accordion/accordion.js',
		'bower_components/jquery-vui-change-tracking/changeTracker.js',
		'bower_components/jquery-vui-change-tracking/changeTracking.js',
		'bower_components/jquery-vui-collapsible-section/collapsibleSection.js',
		'bower_components/jquery-vui-more-less/moreLess.js'/*,
		'bower_components/vui-scrollspy-jquery/scroll-spy.js'*/
	];

gulp.task('javascript', function() {
	return gulp.src( jsFiles )
		.pipe( concat('bsi.js') )
		.pipe( gulp.dest('./dist') )
		/*.pipe( jsmin() )
		.pipe( rename( { suffix: '.min' } ) )*/
		.pipe( gulp.dest('./dist') );
});

gulp.task('publish', function(cb) {
	gulp.src('./dist/**')
		.pipe(publisher.getStream())
		.on('end', function() {
			var message = '[Deployment available online](' +
				publisher.getLocation() + ')';
			pg.comment(message, {}, function(error, response) {
				if(error)
					return cb(JSON.stringify(error));
				cb();
			} );
		} );
});
