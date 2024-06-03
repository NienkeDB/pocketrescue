import {useState, useEffect} from "react";
import axios from "axios";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import SinglePokemon from "./pokedex/SinglePokemon";
import "./RescueCenter.css";

function RescueCenter() {
  const [storagePokemon, setStoragePokemon] = useState([]);
  const hContainer = window.innerHeight * 0.5;
  const wContainer = 1300;
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isIntroOpen, setIntroOpen] = useState(true);

  const closeAboutModal = () => setAboutOpen(false);
  
  function openAboutModal(pokemon_id) {
    setSelectedPokemonId(pokemon_id);
    setAboutOpen(true);
  }

  const closeIntroOpen = () => {
    localStorage.setItem('seenIntro', true); 
    setIntroOpen(false)
  };
  
  useEffect(() => {
    getStoragePokemon();
    let returningUser = localStorage.getItem('seenIntro');
    setIntroOpen(!returningUser); //Set to true to see the introscreen every single time
  }, [])

  async function getStoragePokemon(){
    try{
      const response = await axios.get('/api/pocketrescue');
      const pokeData = response.data.filter((p) => p.storage > 0)
      setStoragePokemon(pokeData);
      console.log(pokeData)
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
      <div className="pokemon-container">
        <div id='pokemon-floor'>
        {storagePokemon?.splice(Math.floor(Math.random()*storagePokemon?.length),6).map((p) => (
          <img onClick={() => openAboutModal(p.pokemon_id)}
          key={p.main_id} 
          src={p.img}
          alt={p.name}
          style={{
            position:'absolute',
            top: `${Math.random() * (hContainer - 260)}px`,
            left: `${Math.random() * (wContainer - 260)}px`,
          }} 
          />
        ))}
        </div>
      </div>

      <Modal isOpen={isAboutOpen} onClose={closeAboutModal}>
        <SinglePokemon pokemon_id={selectedPokemonId}/>
      </Modal>

      {isIntroOpen && (
      <Modal isOpen={true} onClose={closeIntroOpen}>
        <div id='intro-modal'>
        <h2>Tutorial</h2>
        <p>Welcome to Pocket Rescue. Since this is your first time, below you'll find a short tutorial. Happy rescuing!</p>
        <ul>
          <li><img src='src/assets/bcenter.png' />Center | See some of your rescued pokemon happily roaming around your rescue center.</li>
          <li><img src='src/assets/bpokedex.png' />Pokedex | Explore the Pokemon available & rescued.</li>
          <li><img src='src/assets/brescue.png' />Rescue | Rescue another Pokemon.</li>
          <li><img src='src/assets/badopt.png' />Adopt | Find a forever home for your rescued pokemon.</li>
          <li><img src='src/assets/bsettings.png' />Settings | Quit the game or find more info on the game.</li>
        </ul>
        </div>
      </Modal>
      )}
        
      <Menu />
    </>

    );
  }
  

export default RescueCenter;