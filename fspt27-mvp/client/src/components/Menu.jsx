import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Menu.css";

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="menu-container">
       <header className="menu-header">
        <div className="logo"></div>
        <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
        </button>
      </header>
      {isMenuOpen && (
          <div className="menu">
            <ul>
              <li><Link to='/overview'>Home</Link></li>
              <li><Link to='/index'>Index</Link></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  

export default Menu;