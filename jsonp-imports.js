'use strict';

var fs = require('fs');
var glob = require('glob');

glob(process.argv[2], function (err, files) {
	if (err) {
		throw err;
	}

	files.forEach(function (file) {
		fs.readFile(file, 'utf8', function (err, data) {
			if (err) {
				throw err;
			}

			var jsonp = '_d2l_receiveJsonpImport(' + JSON.stringify(file) + ',' + JSON.stringify(data) + ');';

			fs.writeFile(file + '.jsonp', jsonp, 'utf8', function (err) {
				if (err) {
					throw err;
				}
			});
		});
	});
});
