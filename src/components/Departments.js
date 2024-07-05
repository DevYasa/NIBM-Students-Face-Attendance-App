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

  const addDepartment = async () => {
    await axios.post('http://localhost:8000/api/departments/', { name });
    fetchDepartments();
    setName('');
  };

  const deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8000/api/departments/${id}/`);
    fetchDepartments();
  };

  return (
    <div className="departments-container">
      <h2>Departments</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Department"
      />
      <button onClick={addDepartment}>Add Department</button>
      <ul>
        {departments.map(department => (
          <li key={department.id}>
            {department.name}
            <button onClick={() => deleteDepartment(department.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
