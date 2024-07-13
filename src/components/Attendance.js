// src/components/Attendance.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Attendance.css';

const Attendance = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleTakeAttendance = () => {
    // Handle face recognition logic here
    setStatus('Recognizing...');
    // Simulate a delay for face recognition
    setTimeout(() => {
      setStatus('Attendance recorded successfully!');
    }, 3000);
  };

  const handleAdminLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="attendance-container">
      <h1>Take Attendance</h1>
      <div className="camera-feed">
        {/* Placeholder for camera feed */}
        <p>Camera Feed Here</p>
      </div>
      <button onClick={handleTakeAttendance}>Submit</button>
      {status && <p className="status">{status}</p>}
      <button className="admin-login" onClick={handleAdminLogin}>Admin Login</button>
    </div>
  );
};

export default Attendance;
