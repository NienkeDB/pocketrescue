import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import About from './About';
import './LandingScreen.css';

function LandingScreen() {
    const [isAboutOpen, setAboutOpen] = useState(false);

    const openAboutModal = () => setAboutOpen(true);
    const closeAboutModal = () => setAboutOpen(false);

    return (
        <div id='landing'>
            <img id="logo" src='/src/assets/CG-logo.png' />
            <h2></h2>
            <nav>
                <Link to="/overview"><button>Start Game</button></Link>
                <button onClick={openAboutModal}>About</button>
            </nav>
                <Modal isOpen={isAboutOpen} onClose={closeAboutModal}>
                    <About />
                </Modal>
        </div>
    );
}

export default LandingScreen;