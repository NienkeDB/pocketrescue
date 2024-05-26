import { useState, useEffect } from "react";
import Menu from "../../../components/Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../../components/Modal";
import SinglePokemon from "./SinglePokemon";
import "./pokedex.css";

function Index() {
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
        <div id="pokedex">
          <div id="pokedex-wrap">
            <h2>pokedex</h2>
            <button onClick={() => navigate(-1)}>x</button>
          </div>
            <ul className='pokemon'>
              {pokemonList.map((p) => (
                  <li onClick={() => openAboutModal(p.pokemon_id)} data-id={p.pokemon_id} key={p.pokemon_id}>
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
  

export default Index;