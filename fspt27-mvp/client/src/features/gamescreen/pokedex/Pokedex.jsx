import { useState, useEffect } from "react";
import Menu from "../../../components/Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../../components/Modal";
import SinglePokemon from "./SinglePokemon";
import "./pokedex.css";

function Index() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState(null);
    const [isAboutOpen, setAboutOpen] = useState(false);
    const [expandSearch, setExpandSearch] = useState(false);
    const [expandFilter, setExpandFilter] = useState(false);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const navigate = useNavigate();
    const closeAboutModal = () => setAboutOpen(false);

    useEffect(() => {
      fetchStoragePokemon();
    }, [])

    function openAboutModal(pokemon_id) {
      setSelectedPokemonId(pokemon_id);
      setAboutOpen(true);
    }

    function isSearchExpanded(){
      setExpandSearch(!expandSearch)
      console.log(expandSearch)
    }

    function isFilterExpanded(){
      setExpandFilter(!expandFilter)
      console.log(expandFilter)
    }
    
    async function fetchStoragePokemon(){
      try {
        const response = await axios.get('/api/pocketrescue')
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

    const handleChangeFilter = event => {
      setFilter(event.target.value);
    }
  
    const handleSearch = event => {
      setSearch(event.target.value);
    }

    const getFilteredPokemon = () => {
      let filteredList = pokemonList.filter(p => p.name.toLowerCase().includes(search) || search === '');
    
      switch (filter) {
        case 'Available for adoption':
          filteredList = filteredList.filter(p => p.storage !== 0);
          break;
        case 'Most rescued Pokémon':
          filteredList = filteredList.sort((a, b) => b.caught - a.caught);
          break;
        case 'Least rescued Pokémon':
          filteredList = filteredList.sort((a, b) => a.caught - b.caught);
          break;
        case 'Most adopted Pokémon':
          filteredList = filteredList.sort((a, b) => (b.caught - b.storage) - (a.caught - a.storage));
          break;
        case 'Least adopted Pokémon':
          filteredList = filteredList.sort((a, b) => (a.caught - a.storage) - (b.caught - b.storage));
          break;
        default:
          break;
      }
      return filteredList;
    }

    const filteredPokemon = getFilteredPokemon();

    return (
      <>
        <div id="pokedex">
          <div id="pokedex-wrap">
            <h2>pokedex</h2>
            <button onClick={() => navigate(-1)}>x</button>
          </div>
          <div id="filter">
            <input className={expandSearch ? "expanded" : ""} onChange={handleSearch} placeholder="Type Pokémon name"></input>
            <img onClick={isSearchExpanded} src='/src/assets/search.svg' />
            <select
              name='filter'
              value={filter}
              className={expandFilter ? "expanded" : ""} 
              onChange={handleChangeFilter}>
                <option value=''>Sort by..</option>
                <option value='All Pokemon'>All Pokémon</option>
                <option value='Available for adoption'>Available for adoption</option>
                <option value='Most rescued Pokémon'>Most rescued Pokémon</option>
                <option value='Least rescued Pokémon'>Least rescued Pokémon</option>
                <option value='Most adopted Pokémon'>Most adopted Pokémon</option>
                <option value='Least adopted Pokémon'>Least adopted Pokémon</option>
            </select>
            <img onClick={isFilterExpanded} src='/src/assets/filter-results-button.svg' />
          </div>
          <div id='pokedex-content'> 
          <ul className={`pokemon ${filter && filter !== 'All Pokemon' ? 'highlight' : ''}`}>
            {filteredPokemon.map((p) => (
              <li 
              onClick={() => openAboutModal(p.pokemon_id)} 
              data-id={p.pokemon_id} 
              data-storage={`${filter.includes('adopted') ? p.caught - p.storage : filter.includes('rescued') ? p.caught : p.storage}`} 
              key={p.pokemon_id}>
                  <img src={p.img} /> 
              </li>))}
          </ul> 
          </div>
        </div>
          <Modal isOpen={isAboutOpen} onClose={closeAboutModal}>
                    <SinglePokemon pokemon_id={selectedPokemonId}/>
          </Modal>
          <Menu />
        </>
    );
  }
  

export default Index;