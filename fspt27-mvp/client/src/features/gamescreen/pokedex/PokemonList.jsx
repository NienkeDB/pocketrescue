import { useState } from "react";
import { Link } from 'react-router-dom';
import "./pokedex.css";

function PokemonList({fetchSinglePokemonCb, pokemonList}){

return(
    <div id="pokemon-list">
        <div className="pokedex-subheader">
            <h2>Pokémon List</h2>
            <Link to="/overview"><button>Back</button></Link>
        </div>
        <div id='pokedex'>
            {pokemonList.map((pokemon, index) => (
            <ul className='pokemon' key={index} onClick={() => fetchSinglePokemonCb(pokemon.pokemon_id)}>
                <li>{pokemon.pokemon_id} | {pokemon.name}</li>
            </ul>
            ))}
      </div>
    </div>
)
}

export default PokemonList;