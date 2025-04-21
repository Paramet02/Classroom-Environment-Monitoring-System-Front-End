import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appset.css';
import logo from '../assets/Picture/Logo.png';
import logo1 from '../assets/Picture/setapp.png';
import logo3 from '../assets/Picture/noti.png';


function Appset() {
  const navigate = useNavigate();


    const Sidebar = () => {
    return (
      <div className="sidebar">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/dashboard")}>Dashboards</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <div className="page">
        <button>Setting</button>
      </div>
      </div>
    );
  };

  return (
    <div className="setting-container">
      <Sidebar />
        <div className="setting-content">
                <div className="user-info">
                  <div className="profile-icon">
                    <img src={logo1} alt="Profile" className="profile-image" />
                  </div>
                  <div className="user-details">
                    <p>การตั้งค่าแอปพลิเคชัน (App Settings)</p>
                  </div>
                </div>
                
                <div className="setting-options">
                  <button className="setting-button" onClick={() => navigate("")}>
                    <span className="material-icons setting-icon">
                    <div className="profile-icon2">
                    <img src={logo3} alt="Profile" className="profile-image2" />
                    </div></span>
                    การแจ้งเตือน (Notifications)
                  </button>
                </div>
              </div>
    </div>
  );
}

export default Appset;