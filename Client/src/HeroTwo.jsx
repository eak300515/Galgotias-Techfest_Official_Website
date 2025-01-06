import React from 'react';
import './HeroTwo.css';

const HeroTwo = () => {
  return (
    <section className="hero-two-bg min-h-screen flex flex-col justify-center items-center text-center">
      {/* Catchy Animated Line */}
      <h1 className="hero-two-title">
        Experience the <span className="highlight">Future of Innovation</span> at 
        <span className="highlight-tech"> Galgotias TechFest 2025</span>
      </h1>

      {/* Centralized Animated Image */}
      <div className="hero-two-image-wrapper">
        <div className="hero-two-image">
          <p className="loading-text">GU TechFest 2025</p>
          <p className="loading-status">Loading...</p>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
