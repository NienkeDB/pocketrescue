import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Catch from "./Catch";
import axios from "axios";
import Modal from "../../../components/Modal";
import RandomPokemon from "../../../components/RandomPokemon"
// import "./CatchLanding.css";

function CatchLanding() {
    const [isCatchOpen, setCatchopen] = useState(false);
    const [randomPokemon, setRandomPokemon] = useState(0);
    const navigate = useNavigate();

    const openCatchModal = () => setCatchopen(true);
    const closeCatchModal = () => setCatchopen(false);

  const handleRandomPokemon = (pokemon) => {
    setRandomPokemon(pokemon);
  }

  async function updateStorage(pokemon_id) {
    try {
      const response = await axios.put(`/api/cozygarden/${pokemon_id}?action=increase`);
      if (response.status === 200) {
        const data = response.data;
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
          updateStorage(randomPokemon.pokemon_id);
      }
  
    return (
    <div id='catch'>
    <h2>Welcome to catch</h2>
    <p>In this version of the game you can catch a Pokémon by pressing this button. A random Pokémon will show up. You can decide wether you want to adopt the Pokémon yourself and allowing it to roam in your own gardens or you can put it up for adoption by sending it to the Pokémon Storage.</p>
          <button onClick={openCatchModal}>Catch Pokémon</button>
          <button onClick={() => navigate(-1)}>Back</button>
        <Modal isOpen={isCatchOpen} onCloseCb={closeCatchModal}>
          <RandomPokemon onRandomPokemon={handleRandomPokemon} />
          <Catch randomPokemon={randomPokemon} toStorageCb={toStorage}/>
        </Modal>      
    </div>
    );
  }
  

export default CatchLanding;