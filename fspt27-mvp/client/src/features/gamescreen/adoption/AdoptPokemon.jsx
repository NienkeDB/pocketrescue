import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import RandomPokemon from "../../../components/RandomPokemon";
import Menu from "../../../components/Menu";
import Modal from "../../../components/Modal";
import axios from "axios";
import "./AdoptPokemon.css";

function AdoptPokemon() {
  const [randomPokemon, setRandomPokemon] = useState(0);
  const [isAdoptOpen, setAdoptopen] = useState(false);
  const navigate = useNavigate();

  const openAdoptModal = () => setAdoptopen(true);
  const closeAdoptModal = () => {
    setAdoptopen(false);
    navigate('/overview');
  }

  const handleRandomPokemon = (pokemon) => {
    setRandomPokemon(pokemon);
  }

  async function updateStorage(pokemon_id) {
    try {
      const response = await axios.put(`/api/cozygarden/${pokemon_id}?action=decrease`);
      if (response.status === 200) {
        const data = response.data;
        console.log('updateStorage | This Pokémons storage has been decreased', data[0])
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

    const fromStorage = () => {
        //put request for updating storage -1
          updateStorage(randomPokemon.pokemon_id);
      }

    const nextCustomer = () => {
      window.location.reload();
    }

    return (
      <>
    <div id='adopt-pokemon'>
      <RandomPokemon onRandomPokemon={handleRandomPokemon} />
      <div id='adopt-header'>
        <h2>Rehome a pokemon</h2>
        <button onClick={() => navigate(-1)}>x</button>
      </div>
      {randomPokemon.storage === 0 ? 
      <div id='adopt-wrap'>
        <div id='intro'>
        <img src={randomPokemon.img} />
        <p>A customer is looking to adopt {randomPokemon.name}. <br />
        Unfortunately there are no {randomPokemon.name} available for adoption. 
        Try rescueing one!</p>
        </div>
          <div id='adopt-buttons'>
            <Link to="/catchlanding"><button>Rescue pokemon</button></Link>
            <button onClick={nextCustomer}>Try next customer</button>
          </div>
      </div>
        : 
      <div id='adopt-wrap'>
        <div id='intro'>
        <img src={randomPokemon.img} />
        <p>A customer is looking to adopt {randomPokemon.name}. <br />
        Luckily you currently have {randomPokemon.storage} {randomPokemon.name} available for adoption.</p>
        </div>
        <button onClick={() => { openAdoptModal(); fromStorage(); }}>Give {randomPokemon.name} its new home</button>
      </div>
      }        
      <Modal isOpen={isAdoptOpen} onClose={closeAdoptModal}>
        <div id="adopt-modal">
          <h2>{randomPokemon.name} has a new home!</h2>
          <p>You have succesfully rehomed yet another Pokemon, well done!</p>
        </div>
        </Modal> 
    </div>
   <Menu />     
</>
    );
  }
  

export default AdoptPokemon;