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


import React from 'react';
import './Dashboard.css';
import logo from '../assets/Picture/Logo.png';

function Dashboard() {
  // จำลองค่า AQI
  const pm25 = 35;
  const pm10 = 50;
  const co = 3;
  const o3 = 10;
  const no2 = 15;
  const so2 = 5;
  const humidity = 60;
  const temperature = 28;
  const pm1 = 10;
  const co2 = 400;
  const tvoc = 200;
  const people = 5;

  // จำลองค่า AQI สำหรับ card
  const aqiValue = 412;
  const aqiQuality = 'Hazardous';

  return (
    
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="aqi-card">
          <h2 className="aqi-title">Air Quality index</h2>
          <div className="aqi-details">
            <div className="aqi-value-container">
              <span className="aqi-label">AQI แบบเรียลไทม์</span>
              <span className="aqi-value">{aqiValue}</span>
            </div>
            <div className="aqi-quality-container">
              <span className="aqi-label">คุณภาพอากาศคือ</span>
              <span className="aqi-quality">{aqiQuality}</span>
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
        </div>
        <AQIDisplay
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
        <GraphDisplay
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
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" /> {/* เพิ่มรูปโลโก้ */}
      <button>Home</button>
      <div className="page">
      <button>Dashboards</button>
      </div>
      <button>Profile</button>
      <button>Settings</button>
    </div>
  );
}

function AQIDisplay({
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
  return (
    <div className="aqi-display">
      <div className="aqi-row">
        <div className="aqi-box">PM 2.5: {pm25} µg/m³</div>
        <div className="aqi-box">PM 10: {pm10} µg/m³</div>
        <div className="aqi-box">CO: {co} ppm</div>
        <div className="aqi-box">O3: {o3} ppm</div>
      </div>
      <div className="aqi-row">
        <div className="aqi-box">NO2: {no2} ppm</div>
        <div className="aqi-box">SO2: {so2} ppm</div>
        <div className="aqi-box">Humidity: {humidity} %</div>
        <div className="aqi-box">Temperature: {temperature} °C</div>
      </div>
      <div className="aqi-row">
        <div className="aqi-box">PM 1: {pm1} µg/m³</div>
        <div className="aqi-box">CO2: {co2} ppm</div>
        <div className="aqi-box">TVOC: {tvoc} ppb</div>
        <div className="aqi-box">People: {people}</div>
      </div>
    </div>
  );
}

function GraphDisplay({
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
  return (
    <div className="graph-display">
      {/* แสดงกราฟ */}
    </div>
  );
}

export default Dashboard;