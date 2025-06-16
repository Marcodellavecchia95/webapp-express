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
    const reviewSql = `SELECT * FROM reviews WHERE movie_id = ?`;
    connection.query(reviewSql, [movie.id], (err, reviewResults) => {
      if (err)
        return res.status(500).json({
          error: "invalid request",
        });
      if (reviewResults.length === 0)
        return res.status(404).json({
          error: "Film non trovato",
        });
      res.json({
        movie,
        reviews: reviewResults,
      });
    });
  });
};

module.exports = { index, show };
