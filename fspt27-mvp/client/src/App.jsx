import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import Overview from './features/gamescreen/Overview';
import Index from './features/gamescreen/index/Index';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;