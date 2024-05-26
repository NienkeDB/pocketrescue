import { useState } from "react";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import "./Menu.css";

function Menu() {

    return (
      <div id="menu-container">
        <div id="buttons">
          <Link to="/pokedex"><button>P</button></Link>
          <Link to="/storage"><button>AC</button></Link>
          <Link to="/adopt"><button>H</button></Link>
          <Link to="/catchlanding"><button>C</button></Link>
          <Link to="/"><button>Q</button></Link>
        </div>
      </div>
    );
  }
  

export default Menu;