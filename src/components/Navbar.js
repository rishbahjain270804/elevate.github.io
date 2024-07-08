import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#e7e6e1',
      padding: '0.02rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #333',
      // Add media queries for responsive design
      '@media (max-width: 768px)': {
        padding: '0.3rem',
      },
      '@media (max-width: 480px)': {
        padding: '0.2rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }
    }}>

      <a href="#" style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#8F7761',
        textDecoration: 'none',
        marginRight: '20px',
        // Add media queries for responsive design
        '@media (max-width: 480px)': {
          marginRight: '0',
        }
      }}>
        <FaUser size={20} />
      </a>

      <img src="/elevate_logo-removebg.png" alt="Elevate Logo" style={{
        width: '180px',
        height: '85px',
        margin: '0 auto', // Add margin to center the logo
        // Add media queries for responsive design
        '@media (max-width: 768px)': {
          width: '100px',
          height: '50px',
        },
        '@media (max-width: 480px)': {
          width: '80px',
          height: '40px',
        }
      }} />

      <a href="#" style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#8F7761',
        textDecoration: 'none',
        marginLeft: '20px',
        // Add media queries for responsive design
        '@media (max-width: 480px)': {
          marginLeft: '0',
        }
      }}>
        <FaShoppingCart size={20} />
      </a>

    </nav>
  );
};

export default Navbar;