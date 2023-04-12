const express = require("express");

const app = express();

app.use(express.json());

// debug 1
app.get("/helloworld", (_, res) => {
  res.status(200).json("Hello World");
});

// debug 2
app.get("/goodbye", (_, res) => {
  res.sendStatus(204);
});

// debug 3(a) and 3(b)
app.post("/pokemon", (_, res) => {
  res.status(200).json("Pikachu");
});

// debug 4
app.get("/pokemon", (_, res) => {
  res.sendStatus(200).json("Catch them all!");
});

// debug 5
app.delete("/pokemon", (_, res) => {
  res.status(204);
});

// debug 6
app.patch("/greeting/:forename/:surname", (req, res) => {
  const { forename, surname, age }  = req.params;
  res.status(200).json(`Happy ${age}th birthday, ${forename} ${surname}!`);
})

module.exports = app;
