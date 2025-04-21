import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Manage.css'; // Import CSS สำหรับหน้า Setting
import logo from '../assets/Picture/Logo.png';
import logo1 from '../assets/Picture/manage.png';
import logo2 from '../assets/Picture/changepass.png';
import logo3 from '../assets/Picture/editpro.png';


function Manage() {
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
    <div className="manage-container">
      <Sidebar />
        <div className="setting-content">
                <div className="user-info">
                  <div className="profile-icon">
                    <img src={logo1} alt="Profile" className="profile-image" />
                  </div>
                  <div className="user-details">
                    <p>การจัดการบัญชี (Account Management)</p>
                  </div>
                </div>
                
                <div className="setting-options">
                  <button className="setting-button" onClick={() => navigate("/changepass")}>
                    <span className="material-icons setting-icon">
                    <div className="profile-icon2">
                    <img src={logo2} alt="Profile" className="profile-image2" />
                    </div>
                    </span>
                    เปลี่ยนรหัสผ่าน (Change Password)
                  </button>
                  <button className="setting-button" onClick={() => navigate("/editprofile")}>
                    <span className="material-icons setting-icon">
                    <div className="profile-icon2">
                    <img src={logo3} alt="Profile" className="profile-image2" />
                    </div></span>
                    แก้ไขข้อมูลส่วนตัว (Edit Profile)
                  </button>
                </div>
              </div>
    </div>
  );
}

export default Manage;