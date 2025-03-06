// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import ActivityDetails from './components/ActivityDetails';
import PurchasePoints from './components/PurchasePoints';
import AttendanceVerification from './components/AttendanceVerification';

function App() {
  const [user, setUser] = useState({ id: '123', points: 20 });
  const [activities, setActivities] = useState([
    { id: 1, name: 'Soccer Match', cost: 5, date: '2025-03-12', location: 'Central Park', organizer: 'admin', requiredParticipants: 10, currentParticipants: 6, description: 'Casual soccer game for all skill levels' },
    { id: 2, name: 'Badminton Doubles', cost: 3, date: '2025-03-15', location: 'City Gym', organizer: 'admin', requiredParticipants: 4, currentParticipants: 2, description: 'Looking for badminton partners' },
    { id: 3, name: 'Barbecue Party', cost: 10, date: '2025-03-20', location: 'Riverside Park', organizer: 'admin', requiredParticipants: 6, currentParticipants: 3, description: 'BBQ gathering with good food and company' }
  ]);

  const handleJoinEvent = (eventId, cost) => {
    setUser(prev => ({ ...prev, points: prev.points - cost }));
  };

  const handleCreateEvent = (event) => {
    console.log('Event Created:', event);
    // In a real app, this would add the event to the activities list
  };

  const handlePurchasePoints = (amount) => {
    setUser(prev => ({ ...prev, points: prev.points + amount }));
  };

  const handleVerifyAttendance = (userId, activityId) => {
    // Find the activity to get its cost
    const activity = activities.find(a => a.id === activityId);
    
    if (activity) {
      // In a real app, this would verify the attendance and refund points
      setUser(prev => ({ ...prev, points: prev.points + activity.cost }));
      return true;
    }
    
    return false;
  };

  return (
    <div>
      <Navbar userPoints={user.points} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home user={user} onJoinEvent={handleJoinEvent} />} />
          <Route path="/create" element={<CreateEvent onCreateEvent={handleCreateEvent} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/activity/:id" element={<ActivityDetails activities={activities} user={user} onJoinActivity={handleJoinEvent} />} />
          <Route path="/purchase-points" element={<PurchasePoints onPurchase={handlePurchasePoints} />} />
          <Route path="/verify-attendance" element={<AttendanceVerification user={user} onVerifyAttendance={handleVerifyAttendance} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;