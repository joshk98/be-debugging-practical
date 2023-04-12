const express = require("express");

const app = express();

app.use(express.json());

// debug 1
app.get("/helloworld", (_, res) => {
  res.status(200).json("Hello World");
});

// debug 2
app.get("/goodbye", (_, res) => {
  res.sendStatus(200);
});

// debug 3
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
