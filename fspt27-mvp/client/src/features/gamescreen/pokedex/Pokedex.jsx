import { useState, useEffect } from "react";
import SinglePokemon from "./SinglePokemon";
import PokemonList from "./PokemonList";
import Menu from "../../../components/Menu";
import axios from "axios";
import "./pokedex.css";

function Index() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
      fetchPokemon();
    }, [])
    
    async function fetchPokemon(){
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

    const fetchSinglePokemon = async (id) => { 
        try{
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          console.log(response.data)
          setSelectedPokemon(response.data);
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
      };

  const handleOverviewClick = () => {
    setSelectedPokemon(null);
  };
  
    return (
      <div>
        <Menu />
        {selectedPokemon ? (
        <SinglePokemon pokemon={selectedPokemon} onOverviewClick={handleOverviewClick}/>
      ) : (
        <PokemonList pokemonList={pokemonList} fetchSinglePokemonCb={fetchSinglePokemon}  />
      )}
      </div>
    );
  }
  

export default Index;