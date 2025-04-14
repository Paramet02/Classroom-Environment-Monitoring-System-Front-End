import React, { useState } from 'react';
import './Signup.css';
import logo from '../assets/Picture/Logo.png'; // ปรับเส้นทางให้ตรงกับที่เก็บโลโก้ของคุณ
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // จัดการตรรกะการลงทะเบียนที่นี่
    console.log('Signup attempt with:', { username, email, password, confirmPassword });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={logo} alt="Smart Breathe Logo" className="signup-logo" />
      </div>
      <div className="signup-right">
        <div className="signup-form-container">
          <h1 className="signup-title">Welcome to Smart Breathe</h1>
          <h2 className="signup-subtitle">Get Started Now</h2>

          <form className="signup-form" onSubmit={handleSubmit}>
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
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-Enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button onClick={() => navigate("/login")} type="submit" className="signup-button">Sign up</button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="google-button">
              <FcGoogle className="google-icon" />
              Continue with Google
            </button>
          </form>

          <div className="login-prompt">
            Already have an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;