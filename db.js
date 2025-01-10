const mysql = require("mysql");

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

module.exports = con;
