import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Catch.css";

function Catch({randomPokemon, toStorage}) {

  const nextCatch = () => {
    window.location.reload();
  }

  useEffect(() => {
    toStorage();
    console.log('iniating toStorage from Catch.jsx')
  }, [])
  
    return (
    <div id='catch-popup'>
      <h2>You have caught {randomPokemon?.name}!</h2>
      <div id='catch-intro'>
        <img src={randomPokemon?.img} />
        <p>It has been sent to the adoption unit. Better take good care of it so it can quickly find a new home.</p>
      </div>
      <div id='catch-buttons'>
        <button onClick={nextCatch}>Rescue another</button>
        <Link to="/storage"><button>Visit adoption center</button></Link>
      </div>
      <p>{randomPokemon?.caught <= 1 ? `p.s. Congrats, you have rescued your first ${randomPokemon?.name}!` : `` }</p>

    </div>
    );
  }
  

export default Catch;