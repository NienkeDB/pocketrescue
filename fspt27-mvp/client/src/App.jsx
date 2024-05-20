import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import Overview from './features/gamescreen/Overview';
import PokemonStorage from './features/gamescreen/adoption/PokemonStorage';
import './App.css';
import CatchLanding from './features/gamescreen/game/CatchLanding';
import Pokedex from './features/gamescreen/pokedex/Pokedex'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/storage" element={<PokemonStorage />} />
        <Route path="/catchlanding" element={<CatchLanding />} />
      </Routes>
    </Router>
  );
}

export default App;