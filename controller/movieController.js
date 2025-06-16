const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err)
      return res.status(502).json({
        error: "invalid request",
      });
    res.json(results);
  });
};

module.exports = { index };
