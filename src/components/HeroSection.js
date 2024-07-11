import React from 'react';
import '../global.css';
import rex from '../components/t-rex-inverse.png';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div
        className='hero-image-container'
        style={{ backgroundImage: `url(${rex})`}}
      />
      <div className='hero-text-container'>
        <h1
          className='hero-heading special-text'
        >
          Welcome to Elevate
        </h1>
        <p className='hero-paragraph'>
          Unleash your inner T-Rex with our bold clothing
        </p>
        <button
          className='hero-button'
          aria-label='Shop Now'
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
