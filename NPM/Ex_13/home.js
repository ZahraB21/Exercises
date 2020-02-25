const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>
  res.send(`This is my Home Page using Express Router`)
);

module.exports = router;
