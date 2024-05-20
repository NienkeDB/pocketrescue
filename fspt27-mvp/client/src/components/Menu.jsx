import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Menu.css";

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const isActive = (path) => {
      return location.pathname === path;
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
            <li className={isActive('/overview') ? 'inactive' : ''}>
                <Link to="/overview">Home</Link>
              </li>
              <li className={isActive('/pokedex') ? 'inactive' : ''}>
                <Link to="/pokedex">Pokedex</Link>
              </li>
              <li className={isActive('/catch') ? 'inactive' : ''}>
                <Link to="/catchlanding">Catch Pokémon</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  

export default Menu;