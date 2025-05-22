// src/components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';
import StatCard from './StatCard';
import UserTable from '../UserTable/UserTable';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      
      <div className="stats-container">
        <StatCard 
          title="Total Users" 
          value="1,259" 
          icon="👥" 
          color="#4e73df" 
        />
        <StatCard 
          title="Revenue" 
          value="$42,890" 
          icon="💰" 
          color="#1cc88a" 
        />
        <StatCard 
          title="Active Sessions" 
          value="358" 
          icon="🔄" 
          color="#36b9cc" 
        />
        <StatCard 
          title="Conversion Rate" 
          value="18.2%" 
          icon="📈" 
          color="#f6c23e" 
        />
      </div>
      
      <div className="dashboard-content">
        <UserTable />
      </div>
    </div>
  );
}

export default Dashboard;