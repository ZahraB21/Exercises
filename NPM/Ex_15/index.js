const express = require("express");

const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Request/Response is ok"
  });
});

app.listen(port, err =>
  err
    ? console.error(`Error: ${err}`)
    : console.log(`Server running on ${port}`)
);
