import React from 'react';
import { Link } from 'react-router-dom';
import './LandingScreen.css';

function LandingScreen() {

    return (
        <div id='landing'>
            <img id="logo" src='/src/assets/pocketrescue.svg' />
            <h2>Pocket<br />Rescue</h2>
            <nav>
                <Link to="/rescuecenter"><button>Start game</button></Link>
            </nav>
        </div>
    );
}

export default LandingScreen;