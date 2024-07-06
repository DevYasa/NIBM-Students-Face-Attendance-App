// src/components/Departments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Departments.css';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const response = await axios.get('http://localhost:8000/api/departments/');
    setDepartments(response.data);
  };

  const handleAddDepartment = async () => {
    const response = await axios.post('http://localhost:8000/api/departments/', { name });
    setDepartments([...departments, response.data]);
    setName('');
  };

  const handleDeleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8000/api/departments/${id}/`);
    setDepartments(departments.filter(dep => dep.id !== id));
  };

  return (
    <div className="departments">
      <h1>Departments</h1>
      <div className="department-form">
        <input
          type="text"
          placeholder="Department Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddDepartment}>Add Department</button>
      </div>
      <ul className="department-list">
        {departments.map(department => (
          <li key={department.id}>
            {department.name}
            <button onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
