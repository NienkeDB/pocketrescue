import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Catch.css";

function Catch({randomPokemon, toStorageCb}) {
  
    return (
    <div id='catch'>
      <h2>You have caught {randomPokemon.name}!</h2>
      <p>Better take good care of it so it can quickly find a new home.</p>
      <p>{randomPokemon.caught <= 1 ? `Congrats, this is your first ${randomPokemon.name}!` : `` }</p>
      {/* <button>Bring {randomPokemon.name} home</button> */}
      <Link to="/storage"><button onClick={toStorageCb}> Send it to the adoption unit</button></Link>
    </div>
    );
  }
  

export default Catch;