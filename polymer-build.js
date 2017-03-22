const vfs = require('vinyl-fs');
const mergeStream = require('merge-stream');
const PolymerProject = require('polymer-build').PolymerProject;

const project = new PolymerProject({
	"entrypoint": "web-components/index.html",
	"fragments": [
		"bsi.html",
		"d2l-image-banner-overlay.html",
		"d2l-my-courses.html",
		"d2l-navigation.html"
	],
	"sources": []
});

mergeStream(project.sources(), project.dependencies())
	.pipe(project.bundler())
	.pipe(vfs.dest('tmp-wc/'));
