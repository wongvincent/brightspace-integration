const fs = require("fs-extra");
const svg2png = require("svg2png");

[
	'tier3/assignments',
	'tier3/quizzing',
	'tier3/play',
	'tier1/bullet'
].forEach( filePath =>
	fs.readFile(`bower_components/d2l-icons/images/${filePath}.svg`)
		.then(svg2png)
		.then(buffer => fs.outputFile(`dist/email-icons/${filePath}.png`, buffer))
);
