import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Batches.css';

const Batches = () => {
  const [batches, setBatches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  useEffect(() => {
    fetchBatches();
    fetchDepartments();
  }, []);

  const fetchBatches = async () => {
    const response = await axios.get('http://localhost:8000/api/batches/');
    setBatches(response.data);
  };

  const fetchDepartments = async () => {
    const response = await axios.get('http://localhost:8000/api/departments/');
    setDepartments(response.data);
  };

  const addBatch = async () => {
    await axios.post('http://localhost:8000/api/batches/', { name, department: departmentId });
    fetchBatches();
    setName('');
    setDepartmentId('');
  };

  const deleteBatch = async (id) => {
    await axios.delete(`http://localhost:8000/api/batches/${id}/`);
    fetchBatches();
  };

  return (
    <div className="batches-container">
      <h2>Batches</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Batch"
      />
      <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
        <option value="">Select Department</option>
        {departments.map(department => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </select>
      <button onClick={addBatch}>Add Batch</button>
      <ul>
        {batches.map(batch => (
          <li key={batch.id}>
            {batch.name} - {batch.department.name}
            <button onClick={() => deleteBatch(batch.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Batches;
