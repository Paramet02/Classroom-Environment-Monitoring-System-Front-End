import React from 'react';
import './Home.css';
import logo from '../assets/Picture/Logo.png';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'; 

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="welcome-text">Welcome to Smart Breathe</h1>
      </div>
      <div className="right-section">
        <div className="forecast-card">
          <h2 className="forecast-title">5 Days Forecast</h2>
          <div className="forecast-item">
            <WiDaySunny className="weather-icon" /> {/* ใช้ไอคอน */}
            <div className="forecast-details">
              <span className="temperature">20°C</span>
              <span className="day">Friday, 1 Jan</span>
            </div>
          </div>
          <div className="forecast-item">
            <WiCloudy className="weather-icon" /> {/* ใช้ไอคอน */}
            <div className="forecast-details">
              <span className="temperature">22°C</span>
              <span className="day">Saturday, 2 Jan</span>
            </div>
          </div>
          <div className="forecast-item">
            <WiRain className="weather-icon" /> {/* ใช้ไอคอน */}
            <div className="forecast-details">
              <span className="temperature">27°C</span>
              <span className="day">Sunday, 3 Jan</span>
            </div>
          </div>
          <div className="forecast-item">
            <WiCloudy className="weather-icon" /> {/* ใช้ไอคอน */}
            <div className="forecast-details">
              <span className="temperature">18°C</span>
              <span className="day">Monday, 4 Jan</span>
            </div>
          </div>
          <div className="forecast-item">
            <WiSnow className="weather-icon" /> {/* ใช้ไอคอน */}
            <div className="forecast-details">
              <span className="temperature">16°C</span>
              <span className="day">Tuesday, 5 Jan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;