import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/Picture/Logo.png'; // Make sure this path matches your logo location
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { username, password, rememberMe });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="Smart Breathe Logo" className="login-logo" />
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <h1 className="login-title">Welcome to Smart Breathe</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="login-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>

            <button onClick={() => navigate("/home")} type="submit" className="login-button">Login</button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="google-button">
              <FcGoogle className="google-icon" />
              Continue with Google
            </button>
          </form>

          <div className="signup-prompt">
            Don't have an account? <a href="/signup">Signup</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;