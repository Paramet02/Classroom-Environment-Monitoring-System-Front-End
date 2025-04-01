// // import React, { useState } from 'react';
// // import './InfoTemp.css';
// // import { Line } from 'react-chartjs-2';
// // import { Chart, registerables } from 'chart.js';
// // import { useLocation } from 'react-router-dom';
// // Chart.register(...registerables);

// // function InfoTemp() {
// //   const location = useLocation();
// //   const searchParams = new URLSearchParams(location.search);
// //   const parameter = searchParams.get('parameter');
// //   const [timeRange, setTimeRange] = useState('10hour'); // ค่าเริ่มต้นเป็น 10hour

// //   // สร้างข้อมูลกราฟตาม parameter และช่วงเวลา
// //   const data = {
// //     labels: getLabels(timeRange),
// //     datasets: [
// //       {
// //         label: parameter,
// //         data: generateData(parameter, timeRange),
// //         fill: false,
// //         borderColor: 'navy',
// //         tension: 0.1,
// //       },
// //     ],
// //   };

// //   const options = {
// //     scales: {
// //       y: {
// //         beginAtZero: true,
// //       },
// //     },
// //   };

// //   // ฟังก์ชันสร้าง labels ตามช่วงเวลา
// //   function getLabels(range) {
// //     const now = new Date();
// //     const labels = [];
// //     let hours;

// //     switch (range) {
// //       case '6hour':
// //         hours = 6;
// //         break;
// //       case '8hour':
// //         hours = 8;
// //         break;
// //       default:
// //         hours = 10;
// //     }

// //     for (let i = hours; i >= 0; i--) {
// //       const time = new Date(now.getTime() - i * 60 * 60 * 1000);
// //       labels.push(`${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`);
// //     }
// //     return labels;
// //   }

// //   // ฟังก์ชันสร้างข้อมูลตาม parameter และช่วงเวลา
// //   function generateData(param, range) {
// //     const hours = range === '6hour' ? 6 : range === '8hour' ? 8 : 10;
// //     const baseData = {
// //       'ความชื้น': [55, 60, 65, 62, 68, 70, 69, 67, 65, 63],
// //       'อุณหภูมิ': [25, 28, 30, 29, 31, 32, 31, 30, 28, 27],
// //       'PM2.5': [30, 35, 40, 38, 42, 45, 43, 41, 39, 37],
// //       'PM10': [45, 50, 55, 52, 58, 60, 59, 57, 55, 53],
// //       'PM1': [12, 15, 18, 16, 20, 22, 21, 19, 17, 16],
// //       'CO': [2, 3, 4, 3.5, 4.5, 5, 4.8, 4.6, 4.4, 4.2],
// //       'NO2': [140, 150, 160, 155, 165, 170, 168, 166, 164, 162],
// //       'CO2': [550, 600, 650, 620, 680, 700, 690, 670, 650, 630],
// //       'TVOC': [450, 500, 550, 520, 580, 600, 590, 570, 550, 530],
// //       'O3': [75, 80, 85, 82, 88, 90, 89, 87, 85, 83],
// //       'HO2': [75, 80, 85, 82, 88, 90, 89, 87, 85, 83],
// //     };

// //     const selectedData = baseData[param].slice(0, hours + 1);
// //     return selectedData;
// //   }

// //   return (
// //     <div className="info-temp-container">
// //       <div className="info-temp-header"> {/* เพิ่ม header container */}
// //         <h2>Latest Readings</h2>
// //         <div classname="Select">
// //         <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
// //           <option value="6hour">6 Hours</option>
// //           <option value="8hour">8 Hours</option>
// //           <option value="10hour">10 Hours</option>
// //         </select>
// //         </div>
// //       </div>
// //       <div className="info-temp-card">
// //         <h3>{parameter}</h3>
// //         <Line data={data} options={options} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default InfoTemp;

// // 

// import React, { useState, useEffect } from 'react';
// import './InfoTemp.css';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// Chart.register(...registerables);

// function InfoTemp() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const parameter = searchParams.get('parameter');
//   const [timeRange, setTimeRange] = useState('10hour');
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://my-backend-fcfsdbcqeedkcvb9.southeastasia-01.azurewebsites.net/fetchData');
//         const apiData = response.data[0]; // assuming API returns array with one object

//         // Map parameter to API data key
//         const dataKeyMap = {
//           'PM2.5': 'PM2_5',
//           'PM10': 'PM10',
//           'NO2': 'NO2',
//           'CO': 'CO',
//           'O3': 'O3',
//           // Add other mappings as needed
//         };

//         const dataKey = dataKeyMap[parameter];

//         if (dataKey && apiData[dataKey]) {
//           setChartData({
//             labels: [apiData.Datetime], // Use Datetime as label
//             datasets: [{
//               label: parameter,
//               data: [apiData[dataKey]], // Use corresponding data value
//               fill: false,
//               borderColor: 'navy',
//               tension: 0.1,
//             }],
//           });
//         } else {
//           setError(new Error(`Data not found for parameter: ${parameter}`));
//         }
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [parameter, timeRange]);

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!chartData) return null;

//   return (
//     <div className="info-temp-container">
//       <div className="info-temp-header">
//         <h2>Latest Readings</h2>
//         <div className="Select">
//           <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
//             <option value="6hour">6 Hours</option>
//             <option value="8hour">8 Hours</option>
//             <option value="10hour">10 Hours</option>
//           </select>
//         </div>
//       </div>
//       <div className="info-temp-card">
//         <h3>{parameter}</h3>
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// }

// export default InfoTemp;