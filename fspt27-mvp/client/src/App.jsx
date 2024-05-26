import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import Overview from './features/gamescreen/Overview';
import PokemonStorage from './features/gamescreen/adoption/PokemonStorage';
import CatchLanding from './features/gamescreen/game/CatchLanding';
import Pokedex from './features/gamescreen/pokedex/Pokedex'
import SinglePokemon from './features/gamescreen/pokedex/SinglePokemon';
import AdoptPokemon from './features/gamescreen/adoption/AdoptPokemon';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/storage" element={<PokemonStorage />} />
        <Route path="/catchlanding" element={<CatchLanding />} />
        <Route path="/adopt" element={<AdoptPokemon />} />
        <Route path="/pokedex/:pokemon_id" element={<SinglePokemon />} />
      </Routes>
  );
}

export default App;