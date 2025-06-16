const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        error: "invalid request",
      });
    res.json(results);
  });
};

const show = (req, res) => {
  const sql = "SELECT * FROM movies WHERE id = ?";
  const reviewSql = "SELECT * FROM reviews WHERE id = ?";
  const { id } = req.params;
  connection.query(sql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: "invalid request",
      });
    if (results.length === 0)
      return res.status(404).json({
        error: "Film non trovato",
      });

    const movie = results[0];

    connection.query(reviewSql, [id], (err, results) => {
      if (err)
        return res.status(500).json({
          error: "invalid request",
        });
      if (results.length === 0)
        return res.status(404).json({
          error: "Film non trovato",
        });
      res.json({
        movie,
        reviews: results[0],
      });
    });
  });
};

module.exports = { index, show };
