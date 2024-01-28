/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "Rishikeshrishi2004@",
	database: "foodrestaurant",
});

//To insert a data
app.post("/api/create", (req, res) => {
	// const id=req.body.id
	const name = req.body.name;
	const designation = req.body.designation;
	const salary = req.body.salary;

	db.query(
		"INSERT INTO users (name,email,password) VALUES (?,?,?)",
		[name, email, password],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send("values inserted");
			}
		},
	);
});

app.listen(3001, () => {
	console.log("server running on port 3001");
});
