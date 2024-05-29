import React from 'react';
import { Link } from 'react-router-dom';
import './Settings.css'

function Settings() {

    return(
        <div id='settings'>
            <h2>Settings</h2>
            <p id='quit'>Rescued enough Pokemon for now? </p>
            <Link to="/"><button>Quit game</button></Link>

            <h3>About</h3>
            <p>Pocket Rescue is a CodeOp FSPT27 student project.</p>

            <h3>Want to get in touch?</h3>
            <ul>
                <li><a href="https://github.com/NienkeDB" target="_blank"><img alt='github' src="src/assets/github.png" /></a></li>
                <li><a href="mailto:nienke@andtherewascontent.com" target="_blank"><img alt='mail' src="src/assets/email.png" /></a></li>
            </ul>
            <h5>Version 1.0.0</h5>
        </div>
    )
}

export default Settings;