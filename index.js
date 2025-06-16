const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.API_PORT;
const apiUrl = process.env.API_URL;
const movieRouter = require("./routers/router");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");

app.use(express.json());

app.use("/", movieRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  console.log(`server listening on ${apiUrl}${port}`);
});
