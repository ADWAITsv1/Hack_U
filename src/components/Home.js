// src/components/Home.js
import React, { useState, useEffect } from 'react';

function Home({ user, onJoinEvent }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulate fetching activities
    setActivities([
      { id: 1, name: 'サッカーマッチ', cost: 5 },
      { id: 2, name: 'バドミントンダブルス', cost: 3 },
      { id: 3, name: 'バーベキューパーティー', cost: 10 }
    ]);
  }, []);

  const handleJoin = (activity) => {
    if (user.points >= activity.cost) {
      onJoinEvent(activity.id, activity.cost);
    } else {
      alert("このアクティビティに参加するためのポイントが足りません。");
    }
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333'
      }}>利用可能なアクティビティ</h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {activities.map(activity => (
            <li key={activity.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 0',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ fontWeight: '500' }}>
                {activity.name} - <span style={{ color: '#4caf50' }}>コスト: {activity.cost} ポイント</span>
              </div>
              <button 
                onClick={() => handleJoin(activity)}
                style={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                参加する
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;