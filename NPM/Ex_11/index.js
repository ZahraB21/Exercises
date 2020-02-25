const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/products", (req, res) =>
  res.sendFile(path.join(__dirname, "products.html"))
);

app.listen(port, err =>
  err
    ? console.error(`Error: ${err}`)
    : console.log(`Server running on port ${port}`)
);
