// // Dashboard.jsx
// import React from 'react';
// import DataCard from './DataCard.jsx';
// import './Dashboard.css';
// import profileImage from '../assets/Picture/Logo.png';

// function Dashboard() {
//   const data = [
//     { title: 'ความชื้น', value: '60%', date: '14/03/25' },
//     { title: 'อุณหภูมิ', value: '28°', date: '14/03/25' },
//     { title: 'PM2.5', value: '35 µg/m³', date: '14/03/25' },
//     { title: 'PM 10', value: '50 µg/m³', date: '14/03/25' },
//     { title: 'PM 1', value: '15 µg/m³', date: '14/03/25' },
//     { title: 'CO', value: '3 ppm', date: '14/03/25' },
//     { title: 'NO2', value: '150 µg/m³', date: '14/03/25' },
//     { title: 'CO2', value: '600 ppm', date: '14/03/25' },
//     { title: 'TVOC', value: '500 ppb', date: '14/03/25' },
//     { title: 'O3', value: '80 ppb', date: '14/03/25' },
//   ];

//   return (
//     <div className="dashboard">
      
//       <div className="header">
//         <div className="profile">
//         <img src={profileImage} alt="Profile" className="profile-image" />
//         </div>
//         <div className="menu">
//           <button>Home</button>
//           <button>Dashboard</button>
//           <button>Profile</button>
//           <button>Setting</button>
//         </div>
//       </div>
      
//       <div className="card-grid">
//         {data.map((item, index) => (
//           <DataCard key={index} title={item.title}  value={item.value} date={item.date} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // เพิ่ม import Link


function Dashboard() {
  const date = "01/01/25";
  
  return (
    <div className="dashboard">
      <div className="top-cards">
      <Link to="/info-temp" className="card-link"> {/* เพิ่ม Link */}
        <button className="card">
          <h3>ความชื้น</h3>
          <div className="card-content">
            <div className="value">60%</div>
            <div className="date">{date}</div>
          </div>
        </button>
        <button className="card">
          <h3>อุณหภูมิ</h3>
          <div className="card-content">
            <div className="value">28°</div>
            <div className="date">{date}</div>
          </div>
        </button>
        </Link>
      </div>
      <div className="parameters-grid">
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM2.5" }} className="parameter-link">
          <button className="parameter-card">
            <h3>PM2.5</h3>
            <div className="card-content">
              <div className="value">35 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
          <button className="parameter-card">
            <h3>PM 10</h3>
            <div className="card-content">
              <div className="value">50 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
          <button className="parameter-card">
            <h3>PM 1</h3>
            <div className="card-content">
              <div className="value">15 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
          <button className="parameter-card">
            <h3>CO</h3>
            <div className="card-content">
              <div className="value">3 ppm</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3>NO2</h3>
            <div className="card-content">
              <div className="value">150 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3>CO2</h3>
            <div className="card-content">
              <div className="value">600 ppm</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
          <button className="parameter-card">
            <h3>TVOC</h3>
            <div className="card-content">
              <div className="value">500 ppb</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
          <button className="parameter-card">
            <h3>O3</h3>
            <div className="card-content">
              <div className="value">80 ppb</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;