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

app.put("/update/:id", (req, res) => {
  const upid = req.params.id;
  const {
    name,
    original_name,
    birthday,
    gender,
    biography,
    place_of_birth,
    known_for_department,
    profile_path,
  } = req.body;

  con.query(
    "UPDATE telugufilm.tf_people_link SET name=?, original_name=?, birthday=?, gender=?, biography=?, place_of_birth=?, known_for_department=?, profile_path=? WHERE id=?",
    [
      name,
      original_name,
      birthday,
      gender,
      biography,
      place_of_birth,
      known_for_department,
      profile_path,
      upid,
    ],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Database error");
      } else {
        res.send("UPDATED");
        console.log(result);
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
