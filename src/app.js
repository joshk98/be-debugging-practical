const express = require("express");

const app = express();

app.use(express.json());

// debug tasks up to 7 have NO errors in the test, only in the code below here.

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
  const { forename, surname, age } = req.params;
  res.status(200).json(`Happy ${age}th birthday, ${forename} ${surname}!`);
});

// debug 7
app.get("albums", (_, res) => {
  res.status(200).json("Albums");
});

// The following tasks could have errors in the test as well in the code below.

// debug 8
app.get("/login", (req, res) => {
  const { username } = req.params;
  res.status(200).json(`Welcome ${username}`);
});

// debug 9
app.get("/users", (_, res) => {
  const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 21 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  res.status(200).json(users);
});

// debug 10
app.get("/books", (_, res) => {
  res.status(201).json([
    { id: 1, title: "Book A", author: "Author A" },
    { id: 2, title: "Book B", author: "Author B" },
    { id: 3, title: "Book C", author: "Author C" },
  ]);
});

module.exports = app;
