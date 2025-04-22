// import React from 'react';
// import './Dashboard.css';
// import { Link } from 'react-router-dom'; // เพิ่ม import Link

// function Dashboard() {
//   const date = "01/01/25";

//   return (
//     <div className="dashboard">
//       <div className="top-cards">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=ความชื้น" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>ความชื้น</h3>
//             <div className="card-content">
//               <div className="value">60%</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=อุณหภูมิ" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>อุณหภูมิ</h3>
//             <div className="card-content">
//               <div className="value">28°</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//       <div className="parameters-grid">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM2.5" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM2.5</h3>
//             <div className="card-content">
//               <div className="value">35 μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 10</h3>
//             <div className="card-content">
//               <div className="value">50 μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 1</h3>
//             <div className="card-content">
//               <div className="value">15 μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO</h3>
//             <div className="card-content">
//               <div className="value">3 ppm</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>NO2</h3>
//             <div className="card-content">
//               <div className="value">150 μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO2</h3>
//             <div className="card-content">
//               <div className="value">600 ppm</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>TVOC</h3>
//             <div className="card-content">
//               <div className="value">500 ppb</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3  className='h3'>O3</h3>
//             <div className="card-content">
//               <div className="value">80 ppb</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Dashboard() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://my-backend-fcfsdbcqeedkcvb9.southeastasia-01.azurewebsites.net/fetchData'); // แทนที่ด้วย URL API
//         setData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const date = data.date || "N/A"; // ใช้ข้อมูลจาก API หรือแสดง "N/A"

//   return (
//     <div className="dashboard">
//       <div className="top-cards">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=ความชื้น" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>ความชื้น</h3>
//             <div className="card-content">
//               <div className="value">{data.humidity || "N/A"}%</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=อุณหภูมิ" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>อุณหภูมิ</h3>
//             <div className="card-content">
//               <div className="value">{data.temperature || "N/A"}°</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=HO2" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>HO2</h3>
//             <div className="card-content">
//               <div className="value">{data.ho2 || "N/A"}°</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//       <div className="parameters-grid">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM2.5" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM2.5</h3>
//             <div className="card-content">
//               <div className="value">{data.PM2_5 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 10</h3>
//             <div className="card-content">
//               <div className="value">{data.pm10 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 1</h3>
//             <div className="card-content">
//               <div className="value">{data.pm1 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO</h3>
//             <div className="card-content">
//               <div className="value">{data.co || "N/A"} ppm</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>NO2</h3>
//             <div className="card-content">
//               <div className="value">{data.no2 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO2</h3>
//             <div className="card-content">
//               <div className="value">{data.co2 || "N/A"} ppm</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>TVOC</h3>
//             <div className="card-content">
//               <div className="value">{data.tvoc || "N/A"} ppb</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>O3</h3>
//             <div className="card-content">
//               <div className="value">{data.o3 || "N/A"} ppb</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Dashboard() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://my-backend-fcfsdbcqeedkcvb9.southeastasia-01.azurewebsites.net/fetchData');
//         setData(response.data[0]); // assuming API returns array with one object
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const date = data.Datetime || "N/A";

//   return (
//     <div className="dashboard">
//       <div className="top-cards">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=ความชื้น" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>ความชื้น</h3>
//             <div className="card-content">
//               <div className="value">{data.humidity || "N/A"}%</div> {/* or some other data value if needed*/}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=อุณหภูมิ" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>อุณหภูมิ</h3>
//             <div className="card-content">
//               <div className="value">{data.temperature || "N/A"}°</div> {/* or some other data value if needed*/}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=HO2" }} className="card-link">
//           <button className="card">
//             <h3 className='h3'>SO2</h3>
//             <div className="card-content">
//               <div className="value">{data.SO2 || "N/A"}°</div> {/* or some other data value if needed*/}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//       <div className="parameters-grid">
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM2.5" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM2.5</h3>
//             <div className="card-content">
//               <div className="value">{data.PM2_5 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 10</h3>
//             <div className="card-content">
//               <div className="value">{data.PM10 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>PM 1.0</h3>
//             <div className="card-content">
//               <div className="value">{data.pm1 || "N/A"} μg/m³</div> {/* if you need this data */}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO</h3>
//             <div className="card-content">
//               <div className="value">{data.CO || "N/A"} ppm</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>NO2</h3>
//             <div className="card-content">
//               <div className="value">{data.NO2 || "N/A"} μg/m³</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>CO2</h3>
//             <div className="card-content">
//               <div className="value">{data.co2 || "N/A"} ppm</div> {/* if you need this data */}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>TVOC</h3>
//             <div className="card-content">
//               <div className="value">{data.tvoc || "N/A"} ppb</div> {/* if you need this data */}
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//         <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
//           <button className="parameter-card">
//             <h3 className='h3'>O3</h3>
//             <div className="card-content">
//               <div className="value">{data.O3 || "N/A"} ppb</div>
//               <div className="date">{date}</div>
//             </div>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';

// function Dashboard() {
//   const [pm25, setPm25] = useState(0);
//   const [pm10, setPm10] = useState(0);
//   const [co, setCo] = useState(0);
//   const [o3, setO3] = useState(0);
//   const [no2, setNo2] = useState(0);
//   const [so2, setSo2] = useState(0);
//   const [humidity, setHumidity] = useState(0);
//   const [temperature, setTemperature] = useState(0);
//   const [pm1, setPm1] = useState(0);
//   const [co2, setCo2] = useState(0);
//   const [tvoc, setTvoc] = useState(0);
//   const [people, setPeople] = useState(0);

//   useEffect(() => {
//     // ดึงข้อมูล AQI จาก API และอัปเดต state variables
//     fetch('YOUR_API_ENDPOINT')
//       .then((response) => response.json())
//       .then((data) => {
//         setPm25(data.pm25);
//         setPm10(data.pm10);
//         setCo(data.co);
//         setO3(data.o3);
//         setNo2(data.no2);
//         setSo2(data.so2);
//         setHumidity(data.humidity);
//         setTemperature(data.temperature);
//         setPm1(data.pm1);
//         setCo2(data.co2);
//         setTvoc(data.tvoc);
//         setPeople(data.people);
//       });
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <AQIDisplay
//           pm25={pm25}
//           pm10={pm10}
//           co={co}
//           o3={o3}
//           no2={no2}
//           so2={so2}
//           humidity={humidity}
//           temperature={temperature}
//           pm1={pm1}
//           co2={co2}
//           tvoc={tvoc}
//           people={people}
//         />
//         <GraphDisplay
//           pm25={pm25}
//           pm10={pm10}
//           co={co}
//           o3={o3}
//           no2={no2}
//           so2={so2}
//           humidity={humidity}
//           temperature={temperature}
//           pm1={pm1}
//           co2={co2}
//           tvoc={tvoc}
//           people={people}
//         />
//       </div>
//     </div>
//   );
// }

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <button>Home</button>
//       <button>Dashboards</button>
//       <button>Profile</button>
//       <button>Settings</button>
//     </div>
//   );
// }

// function AQIDisplay({
//   pm25,
//   pm10,
//   co,
//   o3,
//   no2,
//   so2,
//   humidity,
//   temperature,
//   pm1,
//   co2,
//   tvoc,
//   people,
// }) {
//   return (
//     <div className="aqi-display">
//       <div className="aqi-value">PM 2.5: {pm25} µg/m³</div>
//       <div className="aqi-value">PM 10: {pm10} µg/m³</div>
//       <div className="aqi-value">CO: {co} ppm</div>
//       <div className="aqi-value">O3: {o3} ppm</div>
//       <div className="aqi-value">NO2: {no2} ppm</div>
//       <div className="aqi-value">SO2: {so2} ppm</div>
//       <div className="aqi-value">Humidity: {humidity} %</div>
//       <div className="aqi-value">Temperature: {temperature} °C</div>
//       <div className="aqi-value">PM 1: {pm1} µg/m³</div>
//       <div className="aqi-value">CO2: {co2} ppm</div>
//       <div className="aqi-value">TVOC: {tvoc} ppb</div>
//       <div className="aqi-value">People: {people}</div>
//     </div>
//   );
// }

// function GraphDisplay({
//   pm25,
//   pm10,
//   co,
//   o3,
//   no2,
//   so2,
//   humidity,
//   temperature,
//   pm1,
//   co2,
//   tvoc,
//   people,
// }) {
//   return (
//     <div className="graph-display">
//       {/* แสดงกราฟ */}
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import logo from "../assets/Picture/Logo.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Select from "react-select";
import axios from "axios";
import { FaTemperatureHigh, FaWater } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { ImMeter } from "react-icons/im";
import { GiGasMask, GiChemicalDrop } from "react-icons/gi";
import { MdCo2, MdOutlineAir } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function Dashboard() {
  const [airData, setAirData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [historicalData, setHistoricalData] = useState({});

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.waqi.info/feed/bangkok/?token=e62239ceafdf907659ac6439e91fa256d07f9dda"
        );
        setAirData(response.data);

        // สร้างข้อมูลประวัติย้อนหลัง (จำลอง)
        // ในการใช้งานจริง คุณอาจต้องดึงข้อมูลประวัติย้อนหลังจาก API เพิ่มเติม
        const now = new Date();
        const historicalEntries = {};

        const parameters = [
          "pm25",
          "pm10",
          "o3",
          "no2",
          "so2",
          "co",
          "temperature",
          "humidity",
        ];
        parameters.forEach((param) => {
          const values = [];
          const labels = [];

          // สร้างข้อมูลย้อนหลัง 24 ชั่วโมง
          for (let i = 23; i >= 0; i--) {
            const time = new Date(now);
            time.setHours(time.getHours() - i);
            labels.push(time.getHours() + ":00");

            // สร้างข้อมูลจำลองที่มีค่าใกล้เคียงกับค่าปัจจุบัน
            let baseValue = 0;

            if (param === "pm25" && response.data.data.iaqi.pm25) {
              baseValue = response.data.data.iaqi.pm25.v;
            } else if (param === "pm10" && response.data.data.iaqi.pm10) {
              baseValue = response.data.data.iaqi.pm10.v;
            } else if (param === "o3" && response.data.data.iaqi.o3) {
              baseValue = response.data.data.iaqi.o3.v;
            } else if (param === "no2" && response.data.data.iaqi.no2) {
              baseValue = response.data.data.iaqi.no2.v;
            } else if (param === "so2" && response.data.data.iaqi.so2) {
              baseValue = response.data.data.iaqi.so2.v;
            } else if (param === "co" && response.data.data.iaqi.co) {
              baseValue = response.data.data.iaqi.co.v;
            } else if (param === "temperature" && response.data.data.iaqi.t) {
              baseValue = response.data.data.iaqi.t.v;
            } else if (param === "humidity" && response.data.data.iaqi.h) {
              baseValue = response.data.data.iaqi.h.v;
            }

            // สร้างความผันผวนเล็กน้อย
            const randomFactor = 0.9 + Math.random() * 0.2; // 0.9 ถึง 1.1
            values.push(Math.round(baseValue * randomFactor));
          }

          historicalEntries[param] = {
            labels: labels,
            values: values,
          };
        });

        setHistoricalData(historicalEntries);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error("Error fetching air quality data:", err);
      }
    };

    fetchData();

    // ดึงข้อมูลทุก 30 นาที
    const interval = setInterval(fetchData, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชั่นสำหรับตรวจสอบระดับ AQI
  const getAqiQuality = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return "Good";
    } else if (aqi > 50 && aqi <= 100) {
      return "Moderate";
    } else if (aqi > 100 && aqi <= 150) {
      return "Poor";
    } else if (aqi > 150 && aqi <= 200) {
      return "Unhealthy";
    } else if (aqi > 200 && aqi <= 300) {
      return "Severe";
    } else if (aqi > 300 && aqi <= 350) {
      return "Hazardous";
    } else {
      return "Hazardous"; // ค่าเกิน 350
    }
  };

  const getAqiColor = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return "#53FB72"; // เขียว
    } else if (aqi > 50 && aqi <= 100) {
      return "#ffeb3b"; // เหลือง
    } else if (aqi > 100 && aqi <= 150) {
      return "#ff9800"; // ส้ม
    } else if (aqi > 150 && aqi <= 200) {
      return "#f640d4"; // ชมพู
    } else if (aqi > 200 && aqi <= 300) {
      return "#9c27b0"; // ม่วง
    } else if (aqi > 300 && aqi <= 350) {
      return "#f44336"; // แดง
    } else {
      return "#f44336"; // แดง (ค่าเกิน 350)
    }
  };

  if (loading)
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <div className="loading-container">
            <h2>กำลังโหลดข้อมูลคุณภาพอากาศ...</h2>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <div className="error-container">
            <h2>เกิดข้อผิดพลาดในการโหลดข้อมูล</h2>
            <p>{error.message || "กรุณาลองใหม่อีกครั้ง"}</p>
          </div>
        </div>
      </div>
    );

  // ดึงค่า AQI จาก API
  const aqiValue = airData?.data?.aqi || 0;
  const aqiQuality = getAqiQuality(aqiValue);

  // ดึงค่าอื่นๆ จาก API
  const pm25 = airData?.data?.iaqi?.pm25?.v || 0;
  const pm10 = airData?.data?.iaqi?.pm10?.v || 0;
  const o3 = airData?.data?.iaqi?.o3?.v || 0;
  const no2 = airData?.data?.iaqi?.no2?.v || 0;
  const so2 = airData?.data?.iaqi?.so2?.v || 0;
  const co = airData?.data?.iaqi?.co?.v || 0;

  // ข้อมูลเพิ่มเติม (ที่อาจมีหรือไม่มีใน API)
  const temperature = airData?.data?.iaqi?.t?.v || 25;
  const humidity = airData?.data?.iaqi?.h?.v || 60;

  // ข้อมูลที่อาจไม่มีใน API (ใช้ค่าสมมติ)
  const pm1 = 10;
  const co2 = 400;
  const tvoc = 200;
  const people = 5;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2 className="aqi-title">Air Quality index</h2>
        <div className="aqi-card">
          <div className="aqi-details">
            <div className="aqi-value-container">
              <span className="aqi-label">AQI แบบเรียลไทม์</span>
              <span
                className="aqi-value"
                style={{ color: getAqiColor(aqiValue) }}
              >
                {aqiValue}
              </span>
            </div>
            <div className="aqi-quality-container">
              <span className="aqi-label">คุณภาพอากาศคือ</span>
              <span
                className="aqi-quality"
                style={{ color: getAqiColor(aqiValue) }}
              >
                {aqiQuality}
              </span>
              <span className="aqi-icon"></span> {/* ใช้ไอคอนแสดงอารมณ์ */}
            </div>
          </div>
          <div className="aqi-scale">
            <div className="aqi-scale-bar">
              <div className="aqi-scale-segment good">Good</div>
              <div className="aqi-scale-segment moderate">Moderate</div>
              <div className="aqi-scale-segment poor">Poor</div>
              <div className="aqi-scale-segment unhealthy">Unhealthy</div>
              <div className="aqi-scale-segment severe">Severe</div>
              <div className="aqi-scale-segment hazardous">Hazardous</div>
            </div>
            <div className="aqi-scale-values">
              <span>0</span>
              <span>50</span>
              <span>100</span>
              <span>150</span>
              <span>200</span>
              <span>300</span>
              <span>350+</span>
            </div>
          </div>
          <div className="aqi-station-info">
            <p>สถานี: {airData?.data?.city?.name || "ไม่ระบุ"}</p>
            <p>
              อัพเดตล่าสุด:{" "}
              {new Date(airData?.data?.time?.v * 1000).toLocaleString()}
            </p>
          </div>
        </div>
        <AQIDisplay
          historicalData={historicalData}
          pm25={pm25}
          pm10={pm10}
          co={co}
          o3={o3}
          no2={no2}
          so2={so2}
          humidity={humidity}
          temperature={temperature}
          pm1={pm1}
          co2={co2}
          tvoc={tvoc}
          people={people}
        />
      </div>
    </div>
  );
}

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <button onClick={() => navigate("/home")}>Home</button>
      <div className="page">
        <button>Dashboards</button>
      </div>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => navigate("/setting")}>Settings</button>
    </div>
  );
}

function AQIDisplay({
  historicalData,
  pm25,
  pm10,
  co,
  o3,
  no2,
  so2,
  humidity,
  temperature,
  pm1,
  co2,
  tvoc,
  people,
}) {
  const [selectedParameter, setSelectedParameter] = useState("pm25");
  const [selectedHour, setSelectedHour] = useState("24");

  const parameterOptions = [
    { value: "pm25", label: "PM 2.5" },
    { value: "pm10", label: "PM 10" },
    { value: "o3", label: "O3" },
    { value: "no2", label: "NO2" },
    { value: "so2", label: "SO2" },
    { value: "co", label: "CO" },
    { value: "temperature", label: "อุณหภูมิ" },
    { value: "humidity", label: "ความชื้น" },
  ];

  const hourOptions = [
    { value: "24", label: "24 ชั่วโมง" },
    { value: "12", label: "12 ชั่วโมง" },
    { value: "6", label: "6 ชั่วโมง" },
  ];

  // สร้างข้อมูลสำหรับกราฟ
  const getChartData = () => {
    if (!historicalData || !historicalData[selectedParameter]) {
      return {
        labels: Array(24).fill(""),
        datasets: [
          {
            label:
              parameterOptions.find(
                (option) => option.value === selectedParameter
              )?.label || selectedParameter,
            data: Array(24).fill(0),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    }

    const hoursToShow = parseInt(selectedHour);
    const labels = [...historicalData[selectedParameter].labels].slice(
      -hoursToShow
    );
    const values = [...historicalData[selectedParameter].values].slice(
      -hoursToShow
    );

    return {
      labels: labels,
      datasets: [
        {
          label:
            parameterOptions.find(
              (option) => option.value === selectedParameter
            )?.label || selectedParameter,
          data: values,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    height: 400,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      color: "black",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
    option: (provided) => ({
      ...provided,
      color: "black",
    }),
  };


  return (
    <div className="aqi-display">
      <div className="Header">
        <h2 className="aqi-title">มลพิษทางอากาศหลัก</h2>
      </div>
      <div className="aqi-row">
        <div className="aqi-box" >
          <GiGasMask className="aqi-box-icon" />
          <div>PM 2.5: {pm25} µg/m³</div>
        </div>
        <div className="aqi-box" >
          <GiGasMask className="aqi-box-icon" />
          <div>PM 10: {pm10} µg/m³</div>
        </div>
        <div className="aqi-box" >
          <MdOutlineAir className="aqi-box-icon" />
          <div>CO: {co} ppm</div>
        </div>
      </div>
      <div className="aqi-row">
        <div className="aqi-box" >
          <GiChemicalDrop className="aqi-box-icon" />
          <div>O3: {o3} ppm</div>
        </div>
        <div className="aqi-box" >
          <GiChemicalDrop className="aqi-box-icon" />
          <div>NO2: {no2} ppm</div>
        </div>
        <div className="aqi-box">
          <GiChemicalDrop className="aqi-box-icon" />
          <div>SO2: {so2} ppm</div>
        </div>
      </div>
      <div className="Header">
        <h2 className="aqi-title">มลพิษทางอากาศรอง</h2>
      </div>
      <div className="aqi-row">
        <div
          className="aqi-box"
          
        >
          <WiHumidity className="aqi-box-icon" />
          <div>Humidity: {humidity} %</div>
        </div>
        <div
          className="aqi-box"
          
        >
          <FaTemperatureHigh className="aqi-box-icon" />
          <div>Temperature: {temperature} °C</div>
        </div>
        <div className="aqi-box" >
          <GiGasMask className="aqi-box-icon" />
          <div>PM 1: {pm1} µg/m³</div>
        </div>
      </div>
      <div className="aqi-row">
        <div className="aqi-box" >
          <MdCo2 className="aqi-box-icon" />
          <div>CO2: {co2} ppm</div>
        </div>
        <div className="aqi-box" >
          <ImMeter className="aqi-box-icon" />
          <div>TVOC: {tvoc} ppb</div>
        </div>
        <div className="aqi-box" >
          <BsFillPeopleFill className="aqi-box-icon" />
          <div>People: {people}</div>
        </div>
      </div>
      <div className="Header">
        <h2 className="aqi-title">กราฟแสดงข้อมูล</h2>
      </div>
      <div className="graph-controls">
        <Select
          options={parameterOptions}
          value={parameterOptions.find(
            (option) => option.value === selectedParameter
          )}
          onChange={(selectedOption) =>
            setSelectedParameter(selectedOption.value)
          }
          styles={selectStyles}
        />
        <Select
          options={hourOptions}
          value={hourOptions.find((option) => option.value === selectedHour)}
          onChange={(selectedOption) => setSelectedHour(selectedOption.value)}
          styles={selectStyles}
        />
      </div>

      <div className="chart-container">
        <Line data={getChartData()} options={options} />
      </div>

      {/* เพิ่มตารางข้อมูลเกี่ยวกับระดับคุณภาพอากาศ */}
      <AQIInfoTable />
    </div>
  );
}

// สร้าง Component ใหม่สำหรับตารางข้อมูลคุณภาพอากาศ
function AQIInfoTable() {
  return (
    <div className="aqi-info-section">
      <h3 className="aqi-info-title">เกี่ยวกับการตรวจวัดคุณภาพอากาศและมลพิษ</h3>
      <h4 className="aqi-info-subtitle">เกี่ยวกับระดับคุณภาพอากาศ</h4>
      <table className="aqi-info-table">
        <thead>
          <tr>
            <th>ค่าดัชนีคุณภาพอากาศ (AQI)</th>
            <th>ระดับ</th>
            <th>ระดับความกังวลเรื่องสุขภาพ</th>
            <th>คำแนะนำ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="good-level">
            <td>0 - 50</td>
            <td>ดี</td>
            <td>
              คุณภาพอากาศถือว่าเป็นที่น่าพอใจและมลพิษทางอากาศทำให้เกิดความเสี่ยงเพียงเล็กน้อยหรือไม่มีเลย
            </td>
            <td></td>
          </tr>
          <tr className="moderate-level">
            <td>51 -100</td>
            <td>ปานกลาง</td>
            <td></td>
            <td>
              คุณภาพอากาศเป็นที่ยอมรับได้
              อย่างไรก็ตามสำหรับการมลพิษบางอย่างอาจต้องระวังในกลุ่มผู้ไวฝุ่นละอองและสารเคมีได้ง่าย
            </td>
          </tr>
          <tr className="poor-level">
            <td>101-150</td>
            <td>
              ไม่ดีต่อสุขภาพ สำหรับ กลุ่มที่ไวต่อมลพิษทางอากาศ
              หรือกลุ่มที่มีอาการง่าย
            </td>
            <td></td>
            <td>
              อาจมีผลกระทบต่อสุขภาพของประชาชนกลุ่มเสี่ยง
              ส่วนประชาชนทั่วไปอาจไม่ได้รับผลกระทบ
            </td>
          </tr>
          <tr className="unhealthy-level">
            <td>151-200</td>
            <td>มีผลกระทบต่อสุขภาพ</td>
            <td>
              ประชากรบางกลุ่มมีสิทธิ์ถึงผลกระทบต่อสุขภาพ
              กลุ่มคนที่มีความเสี่ยงสูงอาจได้รับผลกระทบด้านสุขภาพที่รุนแรงขึ้น
            </td>
            <td></td>
          </tr>
          <tr className="severe-level">
            <td>201-300</td>
            <td>อันตรายต่อสุขภาพเป็นอย่างมาก</td>
            <td>
              คำเตือนด้านสุขภาพในภาวะฉุกเฉิน
              ประชากรทั้งหมดมีแนวโน้มที่จะได้รับผลกระทบมากขึ้น
            </td>
            <td></td>
          </tr>
          <tr className="hazardous-level">
            <td>300+</td>
            <td>เสี่ยงอันตราย</td>
            <td>
              การแจ้งเตือนด้านสุขภาพ:
              ทุกคนอาจได้รับผลกระทบด้านสุขภาพที่รุนแรงขึ้น
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
