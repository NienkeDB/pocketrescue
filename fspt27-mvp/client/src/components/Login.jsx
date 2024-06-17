import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './loginandsignup.css'

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      setErrorMessage('');
      onLogin();  
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-element"
          placeholder="Enter username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          autoComplete="username"

        />
      </div>
      <div className="form-element">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          autoComplete="current-password"

        />
      </div>
      <button type="login" className="btn btn-login">Login</button>
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </form>
  );
};

export default Login;