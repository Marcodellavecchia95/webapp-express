const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.API_PORT;
const apiUrl = process.env.API_URL;
const connection = require("./data/db");

app.use(express.json());

app.get("/", (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err)
      return res.status(502).json({
        error: "invalid request",
      });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`server listening on ${apiUrl}${port}`);
});
