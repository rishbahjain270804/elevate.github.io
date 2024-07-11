import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 480px) and (max-width: 767px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 479px)' });

  const navStyle = { 
    backgroundImage: `url(${require('./navbar.png')})`,
    backgroundSize: 'fit',
    backgroundPosition: 'center',
    backgroundColor: '#e7e6e1',
    padding:'0.2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '10px solid #333',
    borderRight: '7px solid #333',
    borderRadius: '25px',
  };

  const imgStyle = {
    borderRadius:'10px',
    width: isDesktop ? '180px' : isTablet ? '100px' : '80px',
    height: isDesktop ? '85px' : isTablet ? '50px' : '40px',
  };

  return (
    <nav style={navStyle}>
      <img src={require('../elevate_logo.png')} alt="Elevate Logo" style={imgStyle} />

      <div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
        }}>
          <li style={{ marginRight: '20px' }}>Home</li>
          <li style={{ marginRight: '20px' }}>Shop</li>
          <li>About US</li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;