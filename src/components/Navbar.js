// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ username }) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <div className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">🔍</span>
      </div>
      
      <div className="user-profile">
        <div 
          className="profile" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="avatar">👤</div>
          <span className="username">{username}</span>
        </div>
        
        {showDropdown && (
          <div className="dropdown">
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item">Settings</div>
            <div className="dropdown-item">Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;