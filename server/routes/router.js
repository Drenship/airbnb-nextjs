const express = require('express');
const router = express.Router();

router.get("/movies", (req, res) => {
  res.status(201).send({movie: "We made it! And it's great"});
})

module.exports = router;