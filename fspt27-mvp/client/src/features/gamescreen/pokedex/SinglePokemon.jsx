import { useState, useEffect } from "react";
import "./pokedex.css";
import axios from "axios";
import './SinglePokemon.css'

function SinglePokemon({pokemon_id}) {
    const [singlePokemon, setSinglePokemon] = useState(null);
    const [dbPokemon, setDbPokemon] = useState(null)
    const [species, setSpecies] = useState(null);

    useEffect (() => {
      getPokemon();
      getDbPokemon();
    }, [])
    
    const playCry = () => {
      const cry = new Audio(singlePokemon.cries.latest);
      cry.play();
    }

    async function getPokemon() {
        try{
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`);
          console.log(response.data)
          setSinglePokemon(response.data);

          const speciesUrl = response.data.species.url;
          const speciesResponse = await axios.get(speciesUrl);
          setSpecies(speciesResponse.data)
          console.log(speciesResponse.data)
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

    async function getDbPokemon(){
      try {
        const response = await axios.get(`/api/cozygarden/${pokemon_id}`)
        setDbPokemon(response.data[0]);
        console.log(response.data[0])
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

    const getTypeClass = (type) => {
      switch (type) {
        case 'grass':
          return 'grass';
        case 'normal':
          return 'normal';
        case 'fire':
          return 'fire';
        case 'water':
          return 'water';
        case 'electric':
          return 'electric';
        case 'ice':
          return 'ice';
        case 'fighting':
          return 'fighting';
        case 'poison':
          return 'poison';
        case 'ground':
          return 'ground';
        case 'flying':
          return 'flying';
        case 'psychic':
          return 'psychic';
        case 'bug':
          return 'bug';
        case 'rock':
          return 'rock';
        case 'ghost':
          return 'ghost';
        case 'dragon':
          return 'dragon';
        case 'dark':
          return 'dark';
        case 'steel':
          return 'steel';
        case 'fairy':
          return 'fairy';
        default:
          return '';
      }
    }

    const getEnglishText = (entries) => {
      const entry = entries.find(entry => entry.language.name === 'en');
      return entry ? entry.flavor_text : 'No flavor text available';
  }

    return (
      <>
      <div id="single-pokemon">
        <h2>{dbPokemon?.name}</h2>
        <div className="pokedex-subheader">
        </div>
        <div id="pokemon-header">
          <img onClick={playCry} src={singlePokemon?.sprites.front_default} alt={singlePokemon?.name} />
          <p>{species ? getEnglishText(species.flavor_text_entries) : 'Loading...'}</p>
        </div>
        <div id="details">
          <ul id="stats">
            <li>Weight: {(singlePokemon?.weight * 0.1).toFixed(1)} kg</li>
            <li>Height: {(singlePokemon?.height * 0.1).toFixed(1)} m</li> 
          </ul>
          <ul id="type">
            {singlePokemon?.types.map((type, index) => (
              <li id={`${getTypeClass(type.type.name)}`} key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <div id="pokedata">
          <ul>
            <li>Available for adoption<span>{dbPokemon?.storage}</span> </li>
            <li>Rescued in total<span>{dbPokemon?.caught}</span></li>
            <li>{dbPokemon?.name} with forever homes<span>{(dbPokemon?.caught - dbPokemon?.storage).toString()}</span></li>
          </ul>     
        </div>
      </div>
      </>
    );
  }
  

export default SinglePokemon;