import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Overview.css";

function Overview() {
     
    return (
    <div id='overview'>
      <h2>Overview</h2>
        <nav>
          <Link to="/index"><button>Index</button></Link>
          <Link to="/catch"><button>Catch Pokémon</button></Link>
          <Link to="/"><button>Quit game</button></Link>
        </nav>
      </div>
    );
  }
  

export default Overview;