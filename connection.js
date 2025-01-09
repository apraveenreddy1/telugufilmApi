const express = require("express");
const mysql = require("mysql");
const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Navya@26#",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/fetch", (req, res) => {
  con.query(
    "select * from telugufilm.tf_people_link",
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("On port 3000");
  }
});
