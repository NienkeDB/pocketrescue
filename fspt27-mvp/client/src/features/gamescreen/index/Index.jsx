import { useState, useEffect } from "react";
import SinglePokemon from "./SinglePokemon";
import PokemonList from "./PokemonList";
import Menu from "../../../components/Menu";
// import "./Index.css";

function Index() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
      fetchPokemon();
    }, [])
  
    const fetchPokemon = async () => { 
        try{
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=386');
          const data = await response.json();
          const pokemonResults = data.results;
          
          const singlePokemon = await Promise.all(
            pokemonResults.map(async (pokemon) => {
              const pokemonResponse = await fetch(pokemon.url)
              const pokemonData = await pokemonResponse.json();
              const types = pokemonData.types.map(pokemon => pokemon.type.name)
              return{
                id: pokemonData.id,
                name: pokemon.name,
                image: pokemonData.sprites.front_default,
                types: types
              };
            })
          );
  
          const grassPokemon = singlePokemon.filter((pokemon) => pokemon.types.includes('grass'));
          setPokemonList(grassPokemon);
  
        } catch (error) {
          console.error('Error fetching Pokémon:', error);
        }
      };

    // I think this can be combined into one function! 
  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleOverviewClick = () => {
    setSelectedPokemon(null);
  };
  // End possible combined function
  
    return (
      <div>
        <Menu />
        {selectedPokemon ? (
        <SinglePokemon pokemon={selectedPokemon} onOverviewClick={handleOverviewClick}/>
      ) : (
        <PokemonList pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      )}
      </div>
    );
  }
  

export default Index;