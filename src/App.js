// Modified App.js with authentication
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import ActivityDetails from './components/ActivityDetails';
import PurchasePoints from './components/PurchasePoints';
import AttendanceVerification from './components/AttendanceVerification';
import Login from './components/login';

function App() {
  const [user, setUser] = useState(null); // Start with no user (not logged in)
  const [activities, setActivities] = useState([
    { id: 1, name: 'サッカーマッチ', cost: 5, date: '2025-03-12', location: '中央公園', organizer: '管理者', requiredParticipants: 10, currentParticipants: 6, description: '全レベルのプレイヤー向けのカジュアルなサッカー試合' },
    { id: 2, name: 'バドミントンダブルス', cost: 3, date: '2025-03-15', location: '市民体育館', organizer: '管理者', requiredParticipants: 4, currentParticipants: 2, description: 'バドミントンパートナーを探しています' },
    { id: 3, name: 'バーベキューパーティー', cost: 10, date: '2025-03-20', location: '川岸公園', organizer: '管理者', requiredParticipants: 6, currentParticipants: 3, description: '美味しい食事と良い仲間と過ごすBBQ集会' }
  ]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleJoinEvent = (eventId, cost) => {
    setUser(prev => ({ 
      ...prev, 
      points: prev.points - cost,
      joinedActivities: [...prev.joinedActivities, eventId]
    }));
  };

  const handleCreateEvent = (event) => {
    console.log('アクティビティ作成:', event);
    
    // Create a new activity with the provided data
    const newActivity = {
      id: activities.length + 1,
      name: event.name,
      cost: event.cost,
      date: new Date().toISOString(),
      location: 'デフォルト場所',
      organizer: user?.username || '管理者',
      requiredParticipants: 2,
      currentParticipants: 1,
      description: '説明はありません'
    };
    
    // Add the new activity to the list
    setActivities(prev => [...prev, newActivity]);
    
    // Add to user's created activities
    setUser(prev => ({
      ...prev,
      createdActivities: [...prev.createdActivities, newActivity.id]
    }));
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

  // Create a protected route component
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div>
      {user && <Navbar userPoints={user.points} onLogout={handleLogout} />}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/login" element={
            user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
          } />
          
          <Route path="/" element={
            <ProtectedRoute>
              <Home user={user} onJoinEvent={handleJoinEvent} />
            </ProtectedRoute>
          } />
          
          <Route path="/create" element={
            <ProtectedRoute>
              <CreateEvent onCreateEvent={handleCreateEvent} />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile user={user} />
            </ProtectedRoute>
          } />
          
          <Route path="/activity/:id" element={
            <ProtectedRoute>
              <ActivityDetails activities={activities} user={user} onJoinActivity={handleJoinEvent} />
            </ProtectedRoute>
          } />
          
          <Route path="/purchase-points" element={
            <ProtectedRoute>
              <PurchasePoints onPurchase={handlePurchasePoints} />
            </ProtectedRoute>
          } />
          
          <Route path="/verify-attendance" element={
            <ProtectedRoute>
              <AttendanceVerification user={user} onVerifyAttendance={handleVerifyAttendance} />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;