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

// debug 4
app.get("/pokemon", (_, res) => {
  res.sendStatus(200).json("Catch them all!");
});

// debug 5
app.delete("/pokemon", (_, res) => {
  res.status(204);
});

module.exports = app;
