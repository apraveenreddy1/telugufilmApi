const express = require("express");

const con = require("./db");

const app = express();

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
