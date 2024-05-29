import { useState } from "react";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import Modal from "./Modal";
import Settings from "../features/gamescreen/settings/Settings";
import "./Menu.css";

function Menu() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const closeSettingsModal = () => setSettingsOpen(false);
  const openSettingsModal = () => setSettingsOpen(true);

    return (
      <div id="menu-container">
        <div id="buttons">
          <NavLink to="/rescuecenter"><button><img src="src/assets/home.svg"/></button></NavLink>
          <NavLink to="/pokedex"><button><img src="src/assets/pokedex.svg"/></button></NavLink>
          <NavLink to="/rescue"><button><img src="src/assets/offroad.svg"/></button></NavLink>
          <NavLink to="/adopt"><button><img src="src/assets/pet.svg"/></button></NavLink>
          <button onClick={() => openSettingsModal()}><img src="src/assets/setting.svg"/></button>
        </div>
        <Modal isOpen={isSettingsOpen} onClose={closeSettingsModal}>
           <Settings />
        </Modal>
      </div>
    );
  }
  

export default Menu;