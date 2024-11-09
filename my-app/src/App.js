

//thi is new 

import React, { useState } from 'react';
import './App.css';

function App() {
  // State for handling form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${formData.name} and email: ${formData.email}`);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="App-header">
        <h1>Welcome to bahulasusu Matrix</h1>
        <p>Start editing and build your UI.</p>
        
        {/* Basic Form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
