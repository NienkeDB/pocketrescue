import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Overview.css";

function Overview() {
  

    return (
    <div id='overview'>
      <h2>Overview</h2>
        <nav>
          <Link to="/pokedex"><button>Pokédex</button></Link>
          <Link to="/storage"><button>Adoption Center</button></Link>
          <Link to="/adopt"><button>Find a new home</button></Link>
          <Link to="/catchlanding"><button>Catch a Pokémon</button></Link>
          <Link to="/"><button>Quit game</button></Link>
        </nav>
      </div>
    );
  }
  

export default Overview;