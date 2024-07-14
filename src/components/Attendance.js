// src/components/Attendance.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Attendance.css';

const Attendance = () => {
  const [status, setStatus] = useState('');
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleTakeAttendance = async () => {
    setStatus('Recognizing...');
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    const blob = await (await fetch(dataUrl)).blob();

    const formData = new FormData();
    formData.append('image', blob);

    try {
      const response = await axios.post('http://localhost:8000/attendance/recognize/', formData);
      setStatus(response.data.status);
    } catch (error) {
      setStatus('Error recognizing attendance');
      console.error(error);
    }
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing webcam: ', err);
      });
  };


  return (
    <div className="attendance-container">
      <div className="header">
        <img src="/nibm-logo.png" alt="NIBM Logo" className="logo" />
        <button className="admin-login" onClick={handleAdminLogin}>Admin Login</button>
      </div>
      <h1>Take Attendance</h1>
      <div className="camera-feed">
        <video ref={videoRef} autoPlay onCanPlay={startVideo}></video>
      </div>
      <button className="form-button" onClick={handleTakeAttendance}>Submit</button>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default Attendance;
