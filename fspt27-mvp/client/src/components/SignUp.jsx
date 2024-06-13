import React, { useState } from 'react';
import axios from 'axios';
import './loginandsignup.css'


function SignUp({ onSignUp }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', credentials);
      console.log(response.data.message); 
      setErrorMessage('');
      onSignUp(); 
    } catch (error) {
      console.log(error.response.data.message);  
      setErrorMessage(error.response.data.message || 'Signup failed');  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-element"
          placeholder="Enter username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-element"
          placeholder="Enter password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
      </div>
    </form>
  );
}

export default SignUp;