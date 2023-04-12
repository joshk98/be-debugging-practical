const express = require("express");

const app = express();

app.use(express.json());

// debug 1
app.get("/helloworld", (_, res) => {
  res.status(200).json("Hello World");
});

module.exports = app;