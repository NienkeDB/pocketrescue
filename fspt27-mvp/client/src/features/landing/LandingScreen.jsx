import React from 'react';
import { Link } from 'react-router-dom';
import Login from "../../components/Login";
import SignUp from '../../components/SignUp';
import './LandingScreen.css';

function LandingScreen() {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div id='landing'>
            <img id="logo" src='/src/assets/pocketrescue.svg' />
            <h2>Pocket<br />Rescue</h2>
            <div className = "landing-form">
            {showLogin ? <Login /> : <SignUp />}
            <P>
                    {showLogin ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={toggleForm}>
                        {showLogin ? "Sign Up" : "Login"}
                    </button>
            </P>

            </div>
            <nav>
                <Link to="/rescuecenter"><button>Start game</button></Link>
            </nav>
        </div>
    );
}

export default LandingScreen;