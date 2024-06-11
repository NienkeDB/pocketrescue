import React, { useState } from 'react';
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", credentials);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.message, response.data.token);
      setErrorMessage("");
    } catch (error) {
      console.log(error.response.data.message);
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
        />
      </div>
      <button type="login" className="btn btn-primary btn-block">Login</button>
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
      <button type="Sign-up" className="btn btn-primary btn-block">Sign up</button>
    </form>
  );
};

export default Login;
