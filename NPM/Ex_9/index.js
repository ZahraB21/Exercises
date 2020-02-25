const express = require("express");
const Logger = require("logplease");

const app = express();
const port = 3000;

const logger = Logger.create("utils");

app.get("/", (req, res) =>
  res.send("Congrats you're using your first Node.js and Express as Web Server")
);

app.listen(port, err => {
  !err
    ? logger.info(`This HTTP server is running on port ${port}`)
    : logger.error(`Unable to start the server on port ${port}`);
});
