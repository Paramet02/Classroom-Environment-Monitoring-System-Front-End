import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Changepass.css";
import logo from "../assets/Picture/Logo.png";
import logo1 from "../assets/Picture/changepass.png";

function Changepass() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [changeSuccess, setChangeSuccess] = useState("");

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
    if (event.target.value !== newPassword) {
      setPasswordMatchError("รหัสผ่านใหม่และการยืนยันไม่ตรงกัน");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setPasswordMatchError("รหัสผ่านใหม่และการยืนยันไม่ตรงกัน");
      return;
    }

    // --- จำลองการส่งข้อมูลเปลี่ยนรหัสผ่านไปยัง Backend ---
    console.log("รหัสผ่านปัจจุบัน:", currentPassword);
    console.log("รหัสผ่านใหม่:", newPassword);

    // ในการใช้งานจริง คุณจะต้องเรียก API เพื่อเปลี่ยนรหัสผ่านในฐานข้อมูล
    // หากสำเร็จ ให้ตั้งค่า changeSuccess
    setTimeout(() => {
      setChangeSuccess("เปลี่ยนรหัสผ่านสำเร็จ");
      // อาจจะ redirect ไปยังหน้าอื่นหลังจากเปลี่ยนรหัสผ่านสำเร็จ
    }, 1500);
    // ----------------------------------------------------
  };

  const handleForgotPassword = () => {
    // ใส่ logic สำหรับการลืมรหัสผ่าน เช่น navigate ไปยังหน้ากู้คืนรหัสผ่าน
    alert("ไปที่หน้าลืมรหัสผ่าน");
    // navigate('/forgot-password');
  };

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
    <div className="changepass-container">
      <Sidebar />
      <div className="setting-content">
        <div className="user-info">
          <div className="profile-icon">
            <img src={logo1} alt="Profile" className="profile-image" />
          </div>
          <div className="user-details">
            <p>เปลี่ยนรหัสผ่าน (Change Password)</p>
          </div>
        </div>
        <div className="changepass-container2">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit} className="password-form">
            <div className="form-group">
              <label htmlFor="currentPassword">รหัสผ่านปัจจุบัน</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                className="password-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">รหัสผ่านใหม่</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="password-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">ยืนยันรหัสผ่านใหม่</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                className="password-input"
                required
              />
              {passwordMatchError && (
                <p className="error-message">{passwordMatchError}</p>
              )}
            </div>
            
            <div className="forgot-password">
            <button
            type="button"
            className="forgot-password-button"
            onClick={handleForgotPassword}
          >
            Fogetpassword
          </button>
          </div>

            <button type="submit" className="change-button">
              เปลี่ยนรหัสผ่าน
            </button>
            {changeSuccess && (
              <p className="success-message">{changeSuccess}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepass;
