import React from "react";
import "./Profile.css";
import logo from "../assets/Picture/Logo.png";
import profileimage from"../assets/Picture/zenshoku.jpg";
import { useNavigate } from "react-router-dom";



function Profile() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="profile-content">
          <div className="profile-logo-container">
            <img src={profileimage} alt="Logo" className="profile-logo" />
          </div>
          <p className="profile-title">Hello Veraphon</p>
          <p className="profile-email">Email: Veraphon1@gmail.com</p>
        </div>
        <div className="logout-button">
        <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>
    </div>
  );
}

// Sidebar component - เหมือนกับที่ใช้ในหน้า Dashboard แต่เพิ่มการนำทาง
function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/dashboard")}>Dashboards</button>
      <div className="page">
      <button onClick={() => navigate("/profile")}>Profile</button>
      </div>
      <button onClick={() => navigate("/setting")}>Settings</button>
    </div>
  );
}

export default Profile;