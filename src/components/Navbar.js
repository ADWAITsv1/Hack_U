// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userPoints }) => {
  return (
    <nav style={{ 
      background: '#333', 
      color: 'white', 
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Activity Matching
        </Link>
      </div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>ホーム</Link>
        <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>アクティビティ作成</Link>
        <Link to="/verify-attendance" style={{ color: 'white', textDecoration: 'none' }}>出席確認</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>プロフィール</Link>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ 
          background: '#4caf50', 
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px'
        }}>
          {userPoints} ポイント
        </span>
        <Link to="/purchase-points" style={{ 
          backgroundColor: '#2196f3',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '0.9rem'
        }}>
          ポイント購入
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;