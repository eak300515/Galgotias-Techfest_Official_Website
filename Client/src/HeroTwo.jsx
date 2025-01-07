import React from 'react';
import './HeroTwo.css';

const HeroTwo = () => {
  return (
    <section className="hero-two-bg min-h-screen flex items-center">
      {/* Loading Animation */}
      <div className="hero-two-animation-wrapper">
        <div className="hero-two-image">
          <p className="loading-text">GU TechVerse 2025</p>
          <p className="loading-status">Loading...</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="hero-two-content">
        <h1 className="hero-two-title">
          Experience the <span className="highlight">Future of Innovation</span> at
          <span className="highlight-tech"> Galgotias TechVerse 2025</span>
        </h1>
        <div className="hero-two-buttons">
          <button class="btn">Event Brochure</button>
          <button class="btn">Register Now</button>
        </div>
        <h1 className="hero-two-title"><span className="highlight"> 24th - 26th March</span></h1>
      </div>
    </section>
  );
};

export default HeroTwo;
