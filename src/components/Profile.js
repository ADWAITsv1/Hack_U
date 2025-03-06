// src/components/Profile.js
import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h1>プロフィール</h1>
      <p>ポイント: {user.points}</p>
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=User:${user.id}`} 
        alt="ユーザーQRコード" 
        title="イベントでスキャンしてチェックインし、ポイントを獲得" 
      />
    </div>
  );
}

export default Profile;