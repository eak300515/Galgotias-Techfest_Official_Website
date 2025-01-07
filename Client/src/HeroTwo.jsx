import React from 'react';
import './HeroTwo.css';

const HeroTwo = () => {
  return (
    <section className="hero-two-bg min-h-screen flex items-center">
      {/* Loading Animation */}
      <div className="hero-two-animation-wrapper">
        <div className="hero-two-image">
          <p className="loading-text">GU TechFest 2025</p>
          <p className="loading-status">Loading...</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="hero-two-content">
        <h1 className="hero-two-title">
          Experience the <span className="highlight">Future of Innovation</span> at
          <span className="highlight-tech"> Galgotias TechFest 2025</span>24th - 26th March 2025
        </h1>
        <div className="hero-two-buttons">
          <button class="btn">Event Brochure</button>
          <button class="btn">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
