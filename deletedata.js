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

app.delete("/delete/:id", (req, res) => {
  const delid = req.params.id;

  con.query(
    "delete from telugufilm.tf_people_link where id=?",
    delid,
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Database error");
      } else {
        res.send("DELETED");
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
