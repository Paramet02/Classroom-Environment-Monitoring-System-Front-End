// import React from 'react';
// import './Home.css';
// import logo from '../assets/Picture/Logo.png';
// import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'; 

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="left-section">
//         <img src={logo} alt="Logo" className="logo" />
//         <h1 className="welcome-text">Welcome to Smart Breathe</h1>
//       </div>
//       <div className="right-section">
//         <div className="forecast-card">
//           <h2 className="forecast-title">5 Days Forecast</h2>
//           <div className="forecast-item">
//             <WiDaySunny className="weather-icon" /> {/* ใช้ไอคอน */}
//             <div className="forecast-details">
//               <span className="temperature">20°C</span>
//               <span className="day">Friday, 1 Jan</span>
//             </div>
//           </div>
//           <div className="forecast-item">
//             <WiCloudy className="weather-icon" /> {/* ใช้ไอคอน */}
//             <div className="forecast-details">
//               <span className="temperature">22°C</span>
//               <span className="day">Saturday, 2 Jan</span>
//             </div>
//           </div>
//           <div className="forecast-item">
//             <WiRain className="weather-icon" /> {/* ใช้ไอคอน */}
//             <div className="forecast-details">
//               <span className="temperature">27°C</span>
//               <span className="day">Sunday, 3 Jan</span>
//             </div>
//           </div>
//           <div className="forecast-item">
//             <WiCloudy className="weather-icon" /> {/* ใช้ไอคอน */}
//             <div className="forecast-details">
//               <span className="temperature">18°C</span>
//               <span className="day">Monday, 4 Jan</span>
//             </div>
//           </div>
//           <div className="forecast-item">
//             <WiSnow className="weather-icon" /> {/* ใช้ไอคอน */}
//             <div className="forecast-details">
//               <span className="temperature">16°C</span>
//               <span className="day">Tuesday, 5 Jan</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import "./Home.css";
import logo from "../assets/Picture/Logo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="home-content">
          <div className="home-logo-container">
            <img src={logo} alt="Logo" className="home-logo" />
          </div>
          <h1 className="home-title">Welcome to Smart Breathe</h1>
          <div className="home-description">
            <p>
              Smart Breathe ช่วยให้คุณตรวจสอบคุณภาพอากาศรอบตัวได้แบบเรียลไทม์
            </p>
            <p>
              ติดตามค่า AQI, PM2.5, ความชื้น, อุณหภูมิ และมลพิษทางอากาศอื่นๆ 
              เพื่อดูแลสุขภาพของคุณและครอบครัว
            </p>
          </div>
          <div className="home-features">
            <div className="feature-card">
              <h3>ข้อมูลเรียลไทม์</h3>
              <p>ตรวจสอบคุณภาพอากาศแบบทันที</p>
            </div>
            <div className="feature-card">
              <h3>ประวัติย้อนหลัง</h3>
              <p>ดูข้อมูลย้อนหลังและการเปลี่ยนแปลง</p>
            </div>
            <div className="feature-card">
              <h3>การแจ้งเตือน</h3>
              <p>รับการแจ้งเตือนเมื่อค่ามลพิษสูงเกินกำหนด</p>
            </div>
          </div>
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
      <div className="page">
      <button onClick={() => navigate("/home")}>Home</button>
      </div>
      <button onClick={() => navigate("/dashboard")}>Dashboards</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button>Settings</button>
    </div>
  );
}

export default Home;