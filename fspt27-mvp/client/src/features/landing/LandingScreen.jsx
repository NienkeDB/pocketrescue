import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from "../../components/Login";
import SignUp from '../../components/SignUp';
import './LandingScreen.css';

function LandingScreen() {
    const [showLogin, setShowLogin] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    const handleAuthentication = () => {
        setIsAuthenticated(true);
    };

    return (
        <div id="landing">
            <img id="logo" src="/src/assets/pocketrescue.svg" alt="Pocket Rescue" />
            <h2>Pocket<br />Rescue</h2>
            <div className="landing-form">
                {isAuthenticated ? (
                    <nav>
                        <Link to="/rescuecenter"><button>Start game</button></Link>
                    </nav>
                ) : (
                    <>
                        {showLogin ? <Login onLogin={handleAuthentication} /> : <SignUp onSignUp={handleAuthentication} />}
                        <p>
                            {showLogin ? "Don't have an account?" : "Already have an account?"}
                            <button onClick={toggleForm}>
                                {showLogin ? "Sign Up" : "Login"}
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default LandingScreen;