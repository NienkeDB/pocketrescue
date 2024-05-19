import { useState } from "react";
// import "./DetailView.css";

function SinglePokemon({ pokemon, onOverviewClick }) {
    return (
      <div>
         <button onClick={onOverviewClick}>Close</button>
        <h2>{pokemon.name}</h2>
        <h3>{pokemon.id}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <ul>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    );
  }
  

export default SinglePokemon;