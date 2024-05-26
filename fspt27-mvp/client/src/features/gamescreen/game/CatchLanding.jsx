import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Catch from "./Catch";
import axios from "axios";
import Modal from "../../../components/Modal";
import RandomPokemon from "../../../components/RandomPokemon"
import Menu from "../../../components/Menu";
import "./CatchLanding.css";

function CatchLanding() {
  const [isCatchOpen, setCatchopen] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState(0);
  const navigate = useNavigate();

  const openCatchModal = () => setCatchopen(true);
  const closeCatchModal = () => setCatchopen(false);

  const handleRandomPokemon = (pokemon) => {setRandomPokemon(pokemon);}

  async function updateStorage(pokemon_id) {
    try {
      const response = await axios.put(`/api/cozygarden/${pokemon_id}?action=increase`);
      if (response.status === 200) {
        const data = response.data;
        console.log(`updateStorage() | We have received the request from toStorage and increased this Pokémon:`, data[0])
      } else {
        console.log(`Server Error: ${response.status}, ${response.statusText}`);
        console.log("Server Error Message:", response.data.error);
      }
    } catch (error) {
      if (error.response) {
        console.log(`Server Error: ${error.response.status}, ${error.response.statusText}`);
        console.log("Server Error Message:", error.response.data.error);
      } else if (error.request) {
        console.log("Network Error:", error.message);
      } else {
        console.log("Error:", error.message);
      }
    }
  }

    const toStorage = () => {
        //put request for updating store +1
          updateStorage(randomPokemon?.pokemon_id);
          console.log(`toStorage() | We have a random Pokémon and we are iniating the updateStorage:`, randomPokemon)
      }
  
    return (
      <>
        <div id='catchlanding'>
            <div id='catchlanding-header'>
              <h2>Rescue a wild pokemon</h2>
              <button onClick={() => navigate(-1)}>x</button>
            </div>
            <div id='catchlanding-wrap'>
              <div id='intro'>
                <img src="https://64.media.tumblr.com/59f1ea5d708eb9922424f115e97c873b/tumblr_nt1401NDiU1uzvqoio1_r1_540.gif" />
                <p>Oh no! A wild pokemon was spotted in the forest nearby. It looks really upset. Try and catch it so it can find a warm, forever home.</p>
              </div>
              <button onClick={openCatchModal}>Catch Pokemon</button>
              <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
            <Modal isOpen={isCatchOpen} onClose={closeCatchModal}>
              <RandomPokemon onRandomPokemon={handleRandomPokemon} />
              {randomPokemon && <Catch randomPokemon={randomPokemon} toStorage={toStorage} />}
            </Modal> 
        <Menu />     
      </> 
    );
  }
  

export default CatchLanding;