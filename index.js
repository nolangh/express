const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
	res.send("Good Day");
});

app.listen(port, () => {
	console.log("Server is running on 8080");
});
