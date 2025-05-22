// src/components/Dashboard/StatCard.js
import React from 'react';

function StatCard({ title, value, icon, color }) {
  return (
    <div className="stat-card" style={{ borderColor: color }}>
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;