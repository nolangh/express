const express = require("express");
const dayjs = require("dayjs");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/time", (req, res) => {
	let current = dayjs().format("MM/DD/YYYY"); // NOTE: must be all caps
	res.send(`${current}`);
});

app.get("/form", (req, res) => {
	const path = __dirname + "/public/index.html";
	res.sendFile(path, (err) => {
		if (err) {
			throw err;
		}
	});
});

app.post("/input", (req, res) => {
	const fName = req.body.firstName;
	res.send(fName);
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
