import {useEffect} from 'react';
import axios from 'axios';

function RandomPokemon ({onRandomPokemon}) {

    useEffect(() => {
        catchPokemon();
      }, [])
    
    async function catchPokemon() {
        try {
          const response = await axios.get(`/api/pocketrescue/random`)
          onRandomPokemon(response.data[0]);
          console.log(`RandomPokemon.jsx | A random Pokémon is generated:`, response.data[0])
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

    return null;
};

export default RandomPokemon;