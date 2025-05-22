// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  
  return (
    <div className="app">
      <Sidebar 
        isExpanded={sidebarExpanded} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div className={`main-content ${sidebarExpanded ? '' : 'expanded'}`}>
        <Navbar username="Admin User" />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;