const express = require("express");
const joke = require("one-liner-joke");

const app = express();
const port = 3000;

var getRandomJoke = [joke.getRandomJoke(), joke.getRandomJoke()];

app.get("/", (req, res) => res.send("Welcome"));
app.get("/jokes", (req, res) => res.send(getRandomJoke));
app.get("/joke", (req, res) => res.send(getRandomJoke[0]));
app.post("/joke", (req, res) =>
  res.send(`my jokes are too funny, I'm not getting new ones from you..`)
);
app.put("/joke", (req, res) =>
  res.send(`no, no, no.. not changing my act dude!`)
);
app.delete("/joke", (req, res) => res.send(` good jokes never get to old`));
app.all("/joke", (req, res) =>
  res.send(`I know I'm so good that you're looking for jokes everywhere`)
);

app.listen(port, err =>
  err ? console.error(err) : console.log(`Starting server on port ${port}`)
);
