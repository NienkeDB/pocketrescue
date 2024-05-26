import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Menu from "../../../components/Menu";
import Modal from "../../../components/Modal";
import SinglePokemon from "../pokedex/SinglePokemon";
import "./PokemonStorage.css";

function PokemonStorage() {
    const [pokemonList, setPokemonList] = useState([]);
    const navigate = useNavigate();
    const [selectedPokemonId, setSelectedPokemonId] = useState(null);
    const [isAboutOpen, setAboutOpen] = useState(false);

    const closeAboutModal = () => setAboutOpen(false);

    function openAboutModal(pokemon_id) {
      setSelectedPokemonId(pokemon_id);
      setAboutOpen(true);
    }

    useEffect(() => {
      fetchStoragePokemon();
    }, [])
    
    async function fetchStoragePokemon(){
      try {
        const response = await axios.get('/api/cozygarden')
        setPokemonList(response.data);
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

    return (
      <>
        <div id='pokemon-storage'>
          <div id='storage-wrap'>
            <h2>Adoption Center</h2>
            <button onClick={() => navigate(-1)}>x</button>
          </div>
          <ul className='pokemon'>
            {pokemonList.filter(pokemon => pokemon.storage !== 0).map((p, index) => (
              <li onClick={() => openAboutModal(p.pokemon_id)} data-id={p.pokemon_id} data-storage={p.storage} key={index}>
                <img src={p.img} />
              </li>
            ))}
          </ul>
      </div>
      <Modal isOpen={isAboutOpen} onClose={closeAboutModal}>
          <SinglePokemon pokemon_id={selectedPokemonId}/>
      </Modal>
      <Menu />
    </>
    );
  }
  

export default PokemonStorage;