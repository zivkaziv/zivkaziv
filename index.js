const fs = require("fs");
fs.readFile(
	"./info.json",
	"uft-8",
	((err, data) = {
		if(err) {
            console.log(err)
        },
        console.log(data)
	})
);
