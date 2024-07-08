import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '20px auto',
      padding: '20px',
      boxSizing: 'border-box',
      '@media (max-width: 768px)': {
        padding: '10px',
      },
      '@media (max-width: 480px)': {
        padding: '5px',
      },
    }}>
      {children}
    </div>
  );
};

export default Container;