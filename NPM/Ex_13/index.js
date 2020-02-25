const express = require("express");

const home = require("./home");
const user = require("./user");

const app = express();
const port = 3000;

app.use("/", home);
app.use("/users", user);

app.listen(port, err =>
  err
    ? console.error(`Error: ${err}`)
    : console.log(`Server running on ${port}`)
);
