// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Editprofile.css'; // Import CSS สำหรับหน้า Setting
// import logo from '../assets/Picture/Logo.png';
// import logo1 from '../assets/Picture/editpro.png';

// function Editprofile() {
//   const navigate = useNavigate();

//   const [name, setName] = useState('Veraphon'); // State สำหรับเก็บชื่อ
//   const [email, setEmail] = useState('Veraphon@gmail.com'); // State สำหรับเก็บอีเมล

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleUpdateProfile = (event) => {
//     event.preventDefault();
//     // --- จำลองการส่งข้อมูลอัปเดตโปรไฟล์ไปยัง Backend ---
//     console.log('ชื่อใหม่:', name);
//     console.log('อีเมลใหม่:', email);

//     // ในการใช้งานจริง คุณจะต้องเรียก API เพื่ออัปเดตข้อมูลโปรไฟล์ในฐานข้อมูล
//     alert('อัปเดตโปรไฟล์สำเร็จ!');
//     // หลังจากอัปเดตสำเร็จ อาจจะ redirect ไปยังหน้า Profile หรือแสดงข้อความ
//   };

//   const Sidebar = () => {
//     return (
//       <div className="sidebar">
//         <img src={logo} alt="Logo" className="sidebar-logo" />
//         <button onClick={() => navigate("/home")}>Home</button>
//         <button onClick={() => navigate("/dashboard")}>Dashboards</button>
//         <button onClick={() => navigate("/profile")}>Profile</button>
//         <div className="page">
//           <button className="active">Setting</button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="editpro-container">
//       <Sidebar />
//       <div className="setting-content">
//         <div className="user-info">
//           <div className="profile-icon">
//             <img src={logo1} alt="Profile" className="profile-image" />
//           </div>
//           <div className="user-details">
//             <p className="edit-title">แก้ไขข้อมูลส่วนตัว (Edit Profile)</p>
//           </div>
//         </div>

//     <div className='form-container'>
//         <form onSubmit={handleUpdateProfile} className="profile-form">
//           <div className="form-group">
//             <label htmlFor="name">Name :</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={handleNameChange}
//               className="profile-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email :</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               className="profile-input"
//             />
//           </div>
//           <button type="submit" className="update-button">Update</button>
//         </form>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Editprofile;