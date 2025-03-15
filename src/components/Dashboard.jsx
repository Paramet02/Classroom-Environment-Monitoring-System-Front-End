// Dashboard.jsx
import React from 'react';
import DataCard from './DataCard.jsx';
import './Dashboard.css';
import profileImage from '../assets/Picture/Logo.png';

function Dashboard() {
  const data = [
    { title: 'ความชื้น', value: '60%', date: '14/03/25' },
    { title: 'อุณหภูมิ', value: '28°', date: '14/03/25' },
    { title: 'PM2.5', value: '35 µg/m³', date: '14/03/25' },
    { title: 'PM 10', value: '50 µg/m³', date: '14/03/25' },
    { title: 'PM 1', value: '15 µg/m³', date: '14/03/25' },
    { title: 'CO', value: '3 ppm', date: '14/03/25' },
    { title: 'NO2', value: '150 µg/m³', date: '14/03/25' },
    { title: 'CO2', value: '600 ppm', date: '14/03/25' },
    { title: 'TVOC', value: '500 ppb', date: '14/03/25' },
    { title: 'O3', value: '80 ppb', date: '14/03/25' },
  ];

  return (
    <div className="dashboard">
      
      <div className="header">
        <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="menu">
          <button>Home</button>
          <button>Dashboard</button>
          <button>Profile</button>
          <button>Setting</button>
        </div>
      </div>
      
      <div className="card-grid">
        {data.map((item, index) => (
          <DataCard key={index} title={item.title}  value={item.value} date={item.date} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;