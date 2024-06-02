#!/usr/bin/env node
(() => {
	console.log({
		"name": "zivkaziv",
		"version": "0.0.6",
		"description": "Ziv Kalderon contact info",
		"main": "index.js",
		"repository": "zivkaziv/zivkaziv",
		"scripts": {
			"postinstall": "cat info.json",
			"start": "node ."
		},
		"bin": "./index.js",
		"keywords": [
			"person",
			"contact",
			"zivkaziv",
			"ziv kalderon"
		],
		"author": "Ziv Kalderon <kalziv@gmail.com>",
		"license": "GPL-3.0",
		"dependencies": {
			"zivkaziv": "^0.0.2"
		}
	})
})();
