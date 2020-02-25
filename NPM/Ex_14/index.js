const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.get("/products", (req, res) => {
  res.status(500).send("Server Error, please try again later");
});

app.get("/users", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.use(express.static(__dirname + "/public/"));

app.listen(port, err =>
  err
    ? console.error(`Error: ${err}`)
    : console.log(`Server running on ${port}`)
);
