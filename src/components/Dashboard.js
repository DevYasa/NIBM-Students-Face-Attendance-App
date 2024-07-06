// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="stat">
            <h3>450</h3>
            <p>Students</p>
          </div>
          <div className="stat">
            <h3>02</h3>
            <p>Departments</p>
          </div>
          <div className="stat">
            <h3>15</h3>
            <p>Batches</p>
          </div>
          <div className="stat">
            <h3>100</h3>
            <p>Today's Attendance</p>
          </div>
        </div>
        <div className="recent-attendance">
          <h2>Attendance Recently</h2>
          <table>
            <thead>
              <tr>
                <th>Index No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Department</th>
                <th>Batch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MAHNDSE23.2F-01</td>
                <td>SAMEERA</td>
                <td>7/7/2024</td>
                <td>08:25 AM</td>
                <td>IT</td>
                <td>23.2F</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
