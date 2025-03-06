// src/components/AttendanceVerification.js
import React, { useState } from 'react';

function AttendanceVerification({ user, onVerifyAttendance }) {
  const [scannedUserId, setScannedUserId] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  
  // Mock activities for demonstration purposes
  const activitiesToVerify = [
    { id: 1, name: 'Soccer Match', date: '2025-03-12' },
    { id: 2, name: 'Badminton Doubles', date: '2025-03-15' },
    { id: 3, name: 'Barbecue Party', date: '2025-03-20' }
  ];
  
  const handleVerify = (e) => {
    e.preventDefault();
    
    if (!scannedUserId || !selectedActivity) {
      alert("Please provide both user ID and activity");
      return;
    }
    
    // Call onVerifyAttendance if provided, otherwise show alert
    if (onVerifyAttendance) {
      onVerifyAttendance(scannedUserId, parseInt(selectedActivity));
    } else {
      alert(`Attendance verified for User ID: ${scannedUserId} at Activity: ${activitiesToVerify.find(a => a.id === parseInt(selectedActivity))?.name}`);
      setScannedUserId('');
      setSelectedActivity('');
    }
  };
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '30px' }}>Verify Attendance</h1>
      
      <form 
        onSubmit={handleVerify} 
        style={{ 
          backgroundColor: 'white', 
          padding: '30px', 
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="userId" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            User ID
          </label>
          <input 
            type="text" 
            id="userId" 
            value={scannedUserId}
            onChange={(e) => setScannedUserId(e.target.value)}
            placeholder="Enter user ID"
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd' 
            }} 
            required
          />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label htmlFor="activity" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Activity
          </label>
          <select 
            id="activity"
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd' 
            }} 
            required
          >
            <option value="">Select an activity</option>
            {activitiesToVerify.map(activity => (
              <option key={activity.id} value={activity.id}>
                {activity.name} ({activity.date})
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#666' }}>
            In a real application, this would scan a QR code to verify attendance.
          </p>
          
          <button 
            type="submit" 
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '4px',
              width: '100%',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            Verify Attendance
          </button>
        </div>
      </form>
    </div>
  );
}

export default AttendanceVerification;