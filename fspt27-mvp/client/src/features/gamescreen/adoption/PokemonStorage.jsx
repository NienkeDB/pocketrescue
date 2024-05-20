import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Menu from "../../../components/Menu";
import "./PokemonStorage.css";

function PokemonStorage() {

    const [pokemonList, setPokemonList] = useState([]);

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
    <div id='pokemon-storage'>
        <Menu />
        <div className="storage-subheader">
          <h2>Pokemon Storage</h2>
          <Link to="/overview"><button>Back</button></Link>
        </div>
        <div id='pokedex'>
        {pokemonList.filter(pokemon => pokemon.storage !== 0).map((pokemon, index) => (
            <ul className='pokemon' key={index}>
                <li>{pokemon.pokemon_id} | {pokemon.name} | In storage {pokemon.storage}</li>
            </ul>
            ))}
      </div>
    </div>
    );
  }
  

export default PokemonStorage;