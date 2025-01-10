const express = require("express");

const con = require("./db");

const app = express();

app.use(express.json());

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
