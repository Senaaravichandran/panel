// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ isExpanded, toggleSidebar }) {
  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <h2>{isExpanded ? 'Admin Panel' : 'AP'}</h2>
        <button onClick={toggleSidebar} className="toggle-btn">
          {isExpanded ? '←' : '→'}
        </button>
      </div>
      
      <div className="sidebar-menu">
        <div className="menu-item active">
          <span className="icon">📊</span>
          {isExpanded && <span className="label">Dashboard</span>}
        </div>
        <div className="menu-item">
          <span className="icon">👥</span>
          {isExpanded && <span className="label">Users</span>}
        </div>
        <div className="menu-item">
          <span className="icon">📁</span>
          {isExpanded && <span className="label">Products</span>}
        </div>
        <div className="menu-item">
          <span className="icon">💰</span>
          {isExpanded && <span className="label">Revenue</span>}
        </div>
        <div className="menu-item">
          <span className="icon">⚙️</span>
          {isExpanded && <span className="label">Settings</span>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;