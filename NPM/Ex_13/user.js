const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Plese log in to get a user");
});

router.post("/:id", (req, res) => res.send(`Plese log in to create a user`));
router.put("/:id", (req, res) => res.send(`Please log in to update a user`));
router.delete("/:id", (req, res) => res.send(`Please log in to delete a user`));

module.exports = router;
