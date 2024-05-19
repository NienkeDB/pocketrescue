var express = require('express');
var router = express.Router();
const db = require("../model/helper")

router.get('/', function(req, res, next) {
  res.send('Welcome to the Cozy Garden API');
});

//Send back full list of Pokémon
router.get("/cozygarden", (req, res) => {
  db("SELECT * FROM pokemon;")
    .then(results => {
      res.send(results.data);
    })
    .catch(e => res.status(500).send(e));
});

module.exports = router;
