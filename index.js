const express = require("express");
const dayjs = require("dayjs");
const app = express();
const port = 8080;

app.get("/time", (req, res) => {
	let current = dayjs().format("MM/DD/YYYY"); // NOTE: must be all caps
	res.send(`${current}`);
});

app.listen(port, () => {
	console.log(`Server is rusning on ${port}`);
});
