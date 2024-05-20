import { useState } from "react";
import { Link } from 'react-router-dom';
import Catch from "./Catch";
import axios from "axios";
import Modal from "../../../components/Modal";
// import "./CatchLanding.css";

function CatchLanding() {
    const [isCatchOpen, setCatchopen] = useState(false);
    const [caughtPokemon, setCaughtPokemon] = useState(0);

    const openCatchModal = () => setCatchopen(true);
    const closeCatchModal = () => setCatchopen(false);


  async function catchPokemon() {
    try {
      const response = await axios.get(`/api/cozygarden/random`)
      setCaughtPokemon(response.data[0]);
    } catch (error) {
      if(error.response){
        console.log(`Server Error: ${error.response.status}, ${error.response.statusText}`);
        console.log("Server Error Message:", error.response.data.error);
      } else if (error.request) {
        console.log("Network Error:", error.message);
      } else {
        console.log("Error:", error.message);
      }
        console.log(`Network Error: ${error.message}`);
    }
  }

  async function updateStorage(pokemon_id) {
    try {
      const response = await axios.put(`/api/cozygarden/${pokemon_id}`);
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
          updateStorage(caughtPokemon.pokemon_id);
      }
  
    return (
    <div id='catch'>
    <h2>Welcome to catch</h2>
    <p>In this version of the game you can catch a Pokémon by pressing this button. A random Pokémon will show up. You can decide wether you want to adopt the Pokémon yourself and allowing it to roam in your own gardens or you can put it up for adoption by sending it to the Pokémon Storage.</p>
          <button onClick={() => { openCatchModal(); catchPokemon(); }}>Catch Pokémon</button>
          <Link to="/overview"><button>Back</button></Link>
        <Modal isOpen={isCatchOpen} onCloseCb={closeCatchModal}>
          <Catch caughtPokemon={caughtPokemon} toStorageCb={toStorage}/>
        </Modal>      
    </div>
    );
  }
  

export default CatchLanding;