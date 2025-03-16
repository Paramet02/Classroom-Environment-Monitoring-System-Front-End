import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // เพิ่ม import Link


function Dashboard() {
  const date = "01/01/25";
  
  return (
    <div className="dashboard">
      <div className="top-cards">
        <Link to={{ pathname: "/info-temp", search: "?parameter=ความชื้น" }} className="card-link">
          <button className="card">
            <h3 className='h3'>ความชื้น</h3>
            <div className="card-content">
              <div className="value">60%</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=อุณหภูมิ" }} className="card-link">
          <button className="card">
            <h3 className='h3'>อุณหภูมิ</h3>
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
            <h3 className='h3'>PM2.5</h3>
            <div className="card-content">
              <div className="value">35 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM10" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>PM 10</h3>
            <div className="card-content">
              <div className="value">50 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=PM1" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>PM 1</h3>
            <div className="card-content">
              <div className="value">15 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>CO</h3>
            <div className="card-content">
              <div className="value">3 ppm</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=NO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>NO2</h3>
            <div className="card-content">
              <div className="value">150 μg/m³</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=CO2" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>CO2</h3>
            <div className="card-content">
              <div className="value">600 ppm</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=TVOC" }} className="parameter-link">
          <button className="parameter-card">
            <h3 className='h3'>TVOC</h3>
            <div className="card-content">
              <div className="value">500 ppb</div>
              <div className="date">{date}</div>
            </div>
          </button>
        </Link>
        <Link to={{ pathname: "/info-temp", search: "?parameter=O3" }} className="parameter-link">
          <button className="parameter-card">
            <h3  className='h3'>O3</h3>
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