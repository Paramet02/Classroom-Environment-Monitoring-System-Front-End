import React from 'react';
import './InfoTemp.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useLocation } from 'react-router-dom'; // เพิ่ม import useLocation
Chart.register(...registerables);

function InfoTemp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const parameter = searchParams.get('parameter');

  // สร้างข้อมูลกราฟตาม parameter
  const data = {
    labels: ['00:00', '00:30', '01:00', '06:20', '07:00', '07:30', '08:30', '09:00', '10:00'],
    datasets: [
      {
        label: parameter, // ใช้ parameter เป็น label
        data: generateData(parameter), // สร้างข้อมูลตาม parameter
        fill: false,
        borderColor: 'navy',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // ฟังก์ชันสร้างข้อมูลตาม parameter
  function generateData(param) {
    switch (param) {
      case 'ความชื้น':
        return [55, 60, 65, 62, 68, 70, 69, 67, 65];
      case 'อุณหภูมิ':
        return [25, 28, 30, 29, 31, 32, 31, 30, 28];
      case 'PM2.5':
        return [30, 35, 40, 38, 42, 45, 43, 41, 39];
      case 'PM10':
        return [45, 50, 55, 52, 58, 60, 59, 57, 55];
      case 'PM1':
        return [12, 15, 18, 16, 20, 22, 21, 19, 17];
      case 'CO':
        return [2, 3, 4, 3.5, 4.5, 5, 4.8, 4.6, 4.4];
      case 'NO2':
        return [140, 150, 160, 155, 165, 170, 168, 166, 164];
      case 'CO2':
        return [550, 600, 650, 620, 680, 700, 690, 670, 650];
      case 'TVOC':
        return [450, 500, 550, 520, 580, 600, 590, 570, 550];
      case 'O3':
        return [75, 80, 85, 82, 88, 90, 89, 87, 85];
      default:
        return [];
    }
  }

  return (
    <div className="info-temp-container">
      <div className="info-temp-card">
        <h2>{parameter}</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default InfoTemp;