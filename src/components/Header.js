import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        padding: '10px',
      },
      '@media (max-width: 480px)': {
        padding: '5px',
      },
    }}>
      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        margin: '0',
        '@media (max-width: 768px)': {
          fontSize: '24px',
        },
        '@media (max-width: 480px)': {
          fontSize: '18px',
        },
      }}>Welcome to our website</h1>
    </header>
  );
};

export default Header;