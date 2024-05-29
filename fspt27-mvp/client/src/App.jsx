import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import RescueCenter from './features/gamescreen/RescueCenter';
import RescuePokemon from './features/gamescreen/rescue/RescuePokemon';
import Pokedex from './features/gamescreen/pokedex/Pokedex'
import SinglePokemon from './features/gamescreen/pokedex/SinglePokemon';
import AdoptPokemon from './features/gamescreen/adoption/AdoptPokemon';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/rescuecenter" element={<RescueCenter />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/rescue" element={<RescuePokemon />} />
        <Route path="/adopt" element={<AdoptPokemon />} />
        <Route path="/pokedex/:pokemon_id" element={<SinglePokemon />} />
      </Routes>
  );
}

export default App;