const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const app = express();


app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

app.use(cors({}));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method"
	);
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, 	DELETE"
	);
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static("public/kidszone"));


app.use((req, res) => {
	return res.sendFile(path.join(__dirname, "/public/kidszone", "index.html"));
});

module.exports = app;
