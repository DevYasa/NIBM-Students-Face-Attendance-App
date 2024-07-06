// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBuilding, FaUserGraduate, FaClipboardList, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>NIBM</h2>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/departments"><FaBuilding /> Departments</Link></li>
        <li><Link to="/batches"><FaBuilding /> Batches</Link></li>
        <li><Link to="/students"><FaUserGraduate /> Students</Link></li>
        <li><Link to="/attendance"><FaClipboardList /> Attendance</Link></li>
        <li><Link to="/reports"><FaFileAlt /> Reports</Link></li>
      </ul>
      <div className="sidebar-footer">
        <Link to="/login"><FaSignOutAlt /> Sign Out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
