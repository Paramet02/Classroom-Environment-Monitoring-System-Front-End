// DataCard.jsx
import React from 'react';
import './DataCard.css';

function DataCard({ title, value, date }) {
  return (
    <button className="data-card">
      <div className="card-title">{title}</div>
      <div className="card-info">
        <div className="card-value">{value}</div>
        <div className="card-date">{date}</div>
      </div>
    </button>
  );
}

export default DataCard;