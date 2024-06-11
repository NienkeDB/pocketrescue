import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./RescuePopup.css";
import PokemonQuiz from './PokemonQuiz';


function RescuePopup({randomPokemon, toStorage}) {
  const nextRescue = () => {
    window.location.reload();
  }

  useEffect(() => {
    toStorage();
    console.log('iniating toStorage from Catch.jsx')
  }, [])
  
    return (
    <div id='rescue-popup'>
      <h2>You have caught {randomPokemon?.name}!</h2>
      <div id='rescue-intro'>
        <img src={randomPokemon?.img} />
        <p>It has been sent to the adoption unit. Better take good care of it so it can quickly find a new home.</p>
      </div>
      <div id='rescue-buttons'>
        <button onClick={nextRescue}>Next rescue mission</button>
        <Link to="/rescuecenter"><button>Visit adoption center</button></Link>
      </div>
        <PokemonQuiz/>
    </div>
    );
  }
  

export default RescuePopup;