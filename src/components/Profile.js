// src/components/Profile.js
import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <p>Points: {user.points}</p>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=User:${user.id}`} alt="User QR" title="Scan at events to check in and earn points" />
    </div>
  );
}

export default Profile;
