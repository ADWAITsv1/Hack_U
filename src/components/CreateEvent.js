// src/components/CreateEvent.js
import React, { useState } from 'react';

function CreateEvent({ onCreateEvent }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateEvent({ name, cost: parseInt(cost) });
    setName('');
    setCost(0);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333'
      }}>Create New Activity</h1>
      
      <form 
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="name" 
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}
          >
            Activity Name
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Activity Name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label 
            htmlFor="cost" 
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}
          >
            Cost in Points
          </label>
          <input 
            type="number" 
            id="cost" 
            placeholder="Cost in Points" 
            value={cost} 
            onChange={e => setCost(e.target.value)} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '12px 0',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '16px',
            width: '100%'
          }}
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent; 