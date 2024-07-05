import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/batches">Batches</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
