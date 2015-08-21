'use strict';

var opts = {
	targetDirectory: 'bsi',
	creds: {
		key: 'AKIAIZGPQIRSA2WEJEDA',
		secret: process.env.CDN_SECRET
	},
	version: process.env.TRAVIS_TAG
};

var gulp = require('gulp'),
	pg = require('peanut-gallery'),
	publisher = require('gulp-frau-publisher').lib(opts);

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
