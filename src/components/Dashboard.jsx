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


import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-backend-fcfsdbcqeedkcvb9.southeastasia-01.azurewebsites.net/fetchData');
        setData(response.data[0]); // assuming API returns array with one object
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const date = data.Datetime || "N/A";

  return (
    <div className="dashboard">
      <div className="top-cards">
        <Link to={{ pathname: "/info-temp", search: "?parameter=ความชื้น" }} className="card-link">
          <button className="card">
            <h3 className='h3'>ความชื้น</h3>
            <div className="card-content">
              <div className="value">{data.humidity || "N/A"}%</div> {/* or some other data value if needed*/}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=อุณหภูมิ" }} className="card-link">
          <button className="card">
            <h3 className='h3'>อุณหภูมิ</h3>
            <div className="card-content">
              <div className="value">{data.temperature || "N/A"}°</div> {/* or some other data value if needed*/}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=HO2" }} className="card-link">
          <button className="card">
            <h3 className='h3'>SO2</h3>
            <div className="card-content">
              <div className="value">{data.SO2 || "N/A"}°</div> {/* or some other data value if needed*/}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
      </div>
      <div className="parameters-grid">
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM2.5" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>PM2.5</h3>
            <div className="card-content">
              <div className="value">{data.PM2_5 || "N/A"} μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>PM 10</h3>
            <div className="card-content">
              <div className="value">{data.PM10 || "N/A"} μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>PM 1.0</h3>
            <div className="card-content">
              <div className="value">{data.pm1 || "N/A"} μg/m³</div> {/* if you need this data */}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>CO</h3>
            <div className="card-content">
              <div className="value">{data.CO || "N/A"} ppm</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>NO2</h3>
            <div className="card-content">
              <div className="value">{data.NO2 || "N/A"} μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>CO2</h3>
            <div className="card-content">
              <div className="value">{data.co2 || "N/A"} ppm</div> {/* if you need this data */}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>TVOC</h3>
            <div className="card-content">
              <div className="value">{data.tvoc || "N/A"} ppb</div> {/* if you need this data */}
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>O3</h3>
            <div className="card-content">
              <div className="value">{data.O3 || "N/A"} ppb</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;