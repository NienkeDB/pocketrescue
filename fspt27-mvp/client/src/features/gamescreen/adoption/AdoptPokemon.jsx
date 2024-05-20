import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import RandomPokemon from "../../../components/RandomPokemon";
import Menu from "../../../components/Menu";
import Modal from "../../../components/Modal";
import axios from "axios";
// import "./AdoptPokemon.css";

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
        //put request for updating store -1
          updateStorage(randomPokemon.pokemon_id);
      }

    const nextCustomer = () => {
      window.location.reload();
    }

    return (
    <div id='adopt-pokemon'>
      <Menu />
      <h2>Adopt Pokémon</h2>
      <RandomPokemon onRandomPokemon={handleRandomPokemon} />
      <p>A customer is looking to adopt a {randomPokemon.name}</p>
      {randomPokemon.storage === 0 ? 
      <>
      <p>Unfortunately there are no {randomPokemon.name} available for adoption. Try <Link to="/catchlanding">catching</Link> one!</p>
      <button onClick={nextCustomer}>Try next customer</button>
      </>
      : 
      <>
      <p>You currently have {randomPokemon.storage} {randomPokemon.name} available for adoption.</p>
      <button onClick={() => { openAdoptModal(); fromStorage(); }}>Give {randomPokemon.name} its new home</button>
      </>
      }
      <Modal isOpen={isAdoptOpen} onClose={closeAdoptModal}>
        <h4>{randomPokemon.name} has a new home!</h4>
          <p>You have succesfully rehomed yet another Pokémon, well done!</p>
        </Modal>      
      </div>
    );
  }
  

export default AdoptPokemon;