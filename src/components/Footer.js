import React from 'react';

const Footer = () => {
  return (
    <footer style={{
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
      <p>Copyright 2023</p>
    </footer>
  );
};

export default Footer;