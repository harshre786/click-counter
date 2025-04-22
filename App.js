import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    // You can also send this data to a backend here
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
        <button type="submit" style={{ padding: '6px 12px' }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
