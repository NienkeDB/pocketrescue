import { useState } from "react";
import { Link } from 'react-router-dom';
// import "./PokemonList.css";

function PokemonList({pokemonList, onPokemonClick}){

return(
    <div>
        <h2>Pokémon List</h2>
        <button><Link to="/overview">Back</Link></button>
        <div id='pokedex'>
            {pokemonList.map((pokemon, index) => (
            <ul className='pokemon' key={index} onClick={() => onPokemonClick(pokemon)}>
                <li>{pokemon.id} | {pokemon.name}</li>
            </ul>
            ))}
      </div>
    </div>
)
}

export default PokemonList;