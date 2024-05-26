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

//Send back 1 random Pokémon
router.get('/cozygarden/random', async (req, res) => {
    try {
      const result = await db(
        `SELECT * FROM pokemon ORDER BY RAND() LIMIT 1;`
      );
      console.log(result.data[0].pokemon_id);
      if (result.data.length === 1) {
        const updatedResult = await db(`SELECT * FROM pokemon WHERE pokemon_id = ${result.data[0].pokemon_id}`);
        res.status(200).send(updatedResult.data);
        console.log(updatedResult.data[0])
      } else {
        res.status(404).send({ error: "Item Not Found!" });
      }
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

//Send back a single Pokémon
router.get('/cozygarden/:pokemon_id', async (req, res) => {
  try {
    const result = await db(
      `SELECT * FROM pokemon WHERE pokemon_id = ${+req.params.pokemon_id}`
    );
    console.log(result);
    if (result.data.length === 1) {
      const results = await db(`SELECT * FROM pokemon WHERE pokemon_id = ${+req.params.pokemon_id}`);
      res.status(200).send(results.data);
      console.log(results.data)
    } else {
      res.status(404).send({ error: "Item Not Found!" });
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

//Update storage and caught single Pokémon
router.put("/cozygarden/:pokemon_id", async (req, res) => {
  try {
        const action = req.query.action;
        const result = await db(
          `SELECT * FROM pokemon WHERE pokemon_id = ${+req.params.pokemon_id}`
        );
        console.log(result.data);
        if (result.data.length === 1 && action === "increase") {
          sqlQuery = `UPDATE pokemon SET storage = storage + 1, caught = caught + 1 WHERE pokemon_id = ${+req.params.pokemon_id}`;
          await db(sqlQuery);
          const results = await db(`SELECT * FROM pokemon WHERE pokemon_id = ${+req.params.pokemon_id}`);
          console.log(results.data)
          res.status(200).send(results.data);
        }
          else if (result.data.length === 1 && action === "decrease"){
            sqlQuery = `UPDATE pokemon SET storage = storage - 1 WHERE pokemon_id = ${+req.params.pokemon_id}`;
            await db(sqlQuery);
            const results = await db(`SELECT * FROM pokemon WHERE pokemon_id = ${+req.params.pokemon_id}`);
            res.status(200).send(results.data);          
        } else {
          res.status(404).send({ error: "Item Not Found!" });
        }
      } catch (e) {
        res.status(500).send({ error: e.message });
      }
})

module.exports = router;
