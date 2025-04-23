import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Setting.css'; // Import CSS สำหรับหน้า Setting
import logo1 from '../assets/Picture/zenshoku.jpg';
import logo from '../assets/Picture/Logo.png';
import Manage from './Manage';

function Setting() {
  const navigate = useNavigate();

  const userEmail = "Veraphon1@gmail.com"; // ข้อมูล Email (จำลอง)
  const username = "Hello Veraphon"; // ข้อมูล Username (จำลอง)

    const Sidebar = () => {
    return (
      <div className="sidebar1">
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
            <p>Email : {userEmail}</p>
            <p>{username}</p>
            <p>My account</p>
          </div>
        </div>
        
        <div className="setting-options1">
          <button className="setting-button" onClick={() => navigate("/manage")}>
            <span className="material-icons setting-icon"></span>
            การจัดการบัญชี (Account Management)
          </button>
          <button className="setting-button" onClick={() => navigate("/appset")}>
            <span className="material-icons setting-icon"></span>
            การตั้งค่าแอปพลิเคชัน (App Settings)
          </button>
        </div>
        <div className="logout-button1">
        <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Setting;