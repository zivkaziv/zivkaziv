#!/usr/bin/env node
(() => {
	const fs = require("fs");
	fs.readFile("./info.json", { encoding: "utf-8" }, (err, data) => {
		if (err) console.log(err);
		console.log(data);
	});
})();
