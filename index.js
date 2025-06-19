const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.API_PORT;
const apiUrl = process.env.API_URL;
const apiUrlFrontend = process.env.FRONTEND_URL;
const movieRouter = require("./routers/router");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const corsOptions = {
  origin: apiUrlFrontend,
};

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());

app.use("/", movieRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  console.log(`server listening on ${apiUrl}${port}`);
});
