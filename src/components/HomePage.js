import React from 'react';
import ProductList from '../components/ProductList';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Homepage = () => {
  return (
    <div style={{
      maxWidth: '95%',
      margin: '20px auto',
      padding: '5px',
      boxSizing: 'border-box',
      '@media (max-width: 768px)': {
        padding: '10px',
      },
      '@media (max-width: 480px)': {
        padding: '5px',
      },
    }}>
      <Navbar />
      <HeroSection />
        <h1 className='container'>Our Products</h1>
        <ProductList />
    </div>
  );
};

export default Homepage;