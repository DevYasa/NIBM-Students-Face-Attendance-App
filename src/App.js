import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Departments from './components/Departments';
import Batches from './components/Batches';
import Students from './components/Students';
import Attendance from './components/Attendance';
import Reports from './components/Reports';
import './App.css';

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<Navigate to="/attendance" />} />
          </Routes>
      </Router>
  );
};

export default App;
