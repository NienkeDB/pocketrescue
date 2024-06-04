require("dotenv").config();
const axios = require('axios');
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "pocketrescue",
  multipleStatements: true
});

con.connect(async function(err) {
  if (err) throw err;
  console.log("Connected!");

  //If you need to import new Pokemon, run 'npm run import-pokemon' to import api data into db
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500');
    const pokemon = response.data.results;

    const detailedPokemon = await Promise.all(pokemon.map(async (p) => {
      const pokemonData = await axios.get(p.url);
      const types = pokemonData.data.types.map(type => type.type.name);
      if (types.includes('grass')) {
        return {
          id: pokemonData.data.id,
          name: pokemonData.data.name,
          img: pokemonData.data.sprites.front_default
        };
      }
    }));
    console.log(detailedPokemon)

    const grassPokemon = detailedPokemon.filter(p => p !== undefined);

    const sqlInsert = 'INSERT INTO pokemon (pokemon_id, name, img) VALUES ?';
    const values = grassPokemon.filter(p => p && p.id && p.name && p.img).map(p => [p.id, p.name, p.img]);

    con.query(sqlInsert, [values], function(err, result) {
      if (err) throw err;
      console.log('Grass-type Pokémon data has been successfully imported');
      console.log('Closing...');
      con.end();
    });
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    con.end();
  }
});