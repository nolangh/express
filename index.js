const express = require("express");
const dayjs = require("dayjs");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/time", (req, res) => {
	let current = dayjs().format("MM/DD/YYYY"); // NOTE: must be all caps
	res.send(`${current}`);
});

app.get("/brownie", (req, res) => {
	const path = __dirname + "/public/Brownies.txt";
	res.sendFile(path, (err) => {
		if (err) {
			throw err;
		}
	});
});

app.listen(port, () => {
	console.log(`Server is rusning on ${port}`);
});
