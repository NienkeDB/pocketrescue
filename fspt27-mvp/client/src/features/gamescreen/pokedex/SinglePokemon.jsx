import { useState } from "react";
import "./pokedex.css";

function SinglePokemon({ pokemon, onOverviewClick }) {

    const playCry = () => {
      const cry = new Audio(pokemon.cries.latest);
      cry.play();
    }

    const getTypeClass = (type) => {
      switch (type) {
        case 'grass':
          return 'grass';
        case 'normal':
          return 'normal';
        case 'fire':
          return 'fire';
        case 'water':
          return 'water';
        case 'electric':
          return 'electric';
        case 'ice':
          return 'ice';
        case 'fighting':
          return 'fighting';
        case 'poison':
          return 'poison';
        case 'ground':
          return 'ground';
        case 'flying':
          return 'flying';
        case 'psychic':
          return 'psychic';
        case 'bug':
          return 'bug';
        case 'rock':
          return 'rock';
        case 'ghost':
          return 'ghost';
        case 'dragon':
          return 'dragon';
        case 'dark':
          return 'dark';
        case 'steel':
          return 'steel';
        case 'fairy':
          return 'fairy';
        default:
          return '';
      }
    }

    return (
      <div id="single-pokemon">
        <div className="pokedex-subheader">
          <h2>{pokemon.id} | {pokemon.name}</h2>
          <button onClick={onOverviewClick}>Close</button>
        </div>
        <img onClick={playCry} src={pokemon.sprites.front_default} alt={pokemon.name} />
        <ul>
          {pokemon.types.map((type, index) => (
            <li id={`${getTypeClass(type.type.name)}`} key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default SinglePokemon;