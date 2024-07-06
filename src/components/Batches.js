// src/components/Batches.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Batches.css';

const Batches = () => {
  const [batches, setBatches] = useState([]);
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    const response = await axios.get('http://localhost:8000/api/batches/');
    setBatches(response.data);
  };

  const handleAddBatch = async () => {
    const response = await axios.post('http://localhost:8000/api/batches/', { name, department: departmentId });
    setBatches([...batches, response.data]);
    setName('');
    setDepartmentId('');
  };

  const handleDeleteBatch = async (id) => {
    await axios.delete(`http://localhost:8000/api/batches/${id}/`);
    setBatches(batches.filter(batch => batch.id !== id));
  };

  return (
    <div className="batches">
      <h1>Batches</h1>
      <div className="batch-form">
        <input
          type="text"
          placeholder="Batch Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department ID"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        />
        <button onClick={handleAddBatch}>Add Batch</button>
      </div>
      <ul className="batch-list">
        {batches.map(batch => (
          <li key={batch.id}>
            {batch.name}
            <button onClick={() => handleDeleteBatch(batch.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Batches;
