const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.API_PORT;
const apiUrl = process.env.API_URL;

app.listen(port, () => {
  console.log(`server listening on ${apiUrl}${port}`);
});
