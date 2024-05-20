import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Catch.css";

function Catch({caughtPokemon, toStorageCb}) {
  
    return (
    <div id='catch'>
      <h2>You have caught {caughtPokemon.name}!</h2>
      <p>Better take good care of it so it can quickly find a new home.</p>
      <p>{caughtPokemon.caught <= 1 ? `Congrats, this is your first ${caughtPokemon.name}!` : `` }</p>
      {/* <button>Bring {caughtPokemon.name} home</button> */}
      <Link to="/storage"><button onClick={toStorageCb}> Send it to the adoption unit</button></Link>
    </div>
    );
  }
  

export default Catch;