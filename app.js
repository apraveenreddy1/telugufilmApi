const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

//Database connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Navya@26#",
});

con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database connected successfully!");
  }
});

app.post("/post", (req, res) => {
  const {
    name,
    id,
    original_name,
    birthday,
    gender,
    biography,
    place_of_birth,
    known_for_department,
    profile_path,
  } = req.body;

  if (!name || !id) {
    return res.status(400).send("Missing required fields.");
  }

  con.query(
    "INSERT INTO telugufilm.tf_people_link (id, name, original_name,birthday, gender, biography, place_of_birth, known_for_department,profile_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      name,
      original_name,
      birthday,
      gender,
      biography,
      place_of_birth,
      known_for_department,
      profile_path,
    ],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Database error");
      } else {
        res.send("POSTED");
      }
    }
  );
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("On port 3000");
  }
});
