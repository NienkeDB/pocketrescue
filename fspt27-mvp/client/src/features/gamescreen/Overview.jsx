import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Index from "./index/Index";
// import "./Overview.css";

function Overview() {
     
    return (
    <div id='overview'>
      <h2>Overview</h2>
        <nav>
        <button><Link to="/index" element={<Index />}>Index</Link></button>
        <button><Link to="/" element={<Index />}>Quit game</Link></button>
        </nav>
      </div>
    );
  }
  

export default Overview;