import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const validUsername = "amrita";
  const validPassword = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    if (username === validUsername && password === validPassword) {
     

      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password ");
    }
  };

  return (
    <div className="main-container">
      <div className="login-card">

        <h2 className="title">Sign In</h2>

        <form onSubmit={handleSubmit}>
          
          <div className="input-field">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;