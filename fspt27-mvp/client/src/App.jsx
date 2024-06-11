import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RescueCenter from './features/gamescreen/RescueCenter';
import PokemonQuiz from './features/gamescreen/rescue/PokemonQuiz';
import RescuePokemon from './features/gamescreen/rescue/RescuePokemon';
import Pokedex from './features/gamescreen/pokedex/Pokedex'
import SinglePokemon from './features/gamescreen/pokedex/SinglePokemon';
import AdoptPokemon from './features/gamescreen/adoption/AdoptPokemon';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/landing" element={<LandingScreen />} />
    <Route path="/rescuecenter" element={<RescueCenter />} />
    <Route path="/pokedex" element={<Pokedex />} />
    <Route path="/rescue" element={<RescuePokemon />} />
    <Route path="/pokemonquiz" element={<PokemonQuiz />} />
    <Route path="/adopt" element={<AdoptPokemon />} />
    <Route path="/pokedex/:pokemon_id" element={<SinglePokemon />} />
</Routes>
  );
}

export default App;