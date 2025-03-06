// src/components/ActivityDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ActivityDetails({ activities, user, onJoinActivity }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Since we don't have the activities prop yet, create a sample activity
  const activity = {
    id: id,
    name: "Sample Activity",
    date: new Date().toISOString(),
    location: "Sample Location",
    organizer: "admin",
    cost: 5,
    currentParticipants: 3,
    requiredParticipants: 10,
    description: "This is a sample activity description."
  };
  
  const handleJoin = () => {
    // If onJoinActivity prop exists, call it
    if (onJoinActivity) {
      onJoinActivity(parseInt(id), activity.cost);
      alert("Joined activity successfully!");
    } else {
      alert("Join functionality not implemented yet.");
    }
  };
  
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>{activity.name}</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '20px 0' 
      }}>
        <div>
          <p><strong>Date & Time:</strong> {new Date(activity.date).toLocaleString()}</p>
          <p><strong>Location:</strong> {activity.location}</p>
          <p><strong>Participants:</strong> {activity.currentParticipants}/{activity.requiredParticipants}</p>
          <p><strong>Organizer:</strong> {activity.organizer}</p>
          <p><strong>Point Cost:</strong> {activity.cost}</p>
        </div>
        
        <div>
          <h3>Description</h3>
          <p>{activity.description}</p>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ddd',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back to Activities
        </button>
        
        <button 
          onClick={handleJoin}
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Join Activity ({activity.cost} Points)
        </button>
      </div>
    </div>
  );
}

export default ActivityDetails;