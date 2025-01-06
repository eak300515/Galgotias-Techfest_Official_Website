import React from 'react';
import './HeroGlass.css';

const HeroGlass = () => {
  const handleBrochureDownload = () => {
    // Replace with actual brochure link
    window.open('/path/to/brochure.pdf', '_blank');
  };

  const handleRegisterNow = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-glass-bg min-h-screen flex justify-center items-center relative">
      {/* Fest Dates */}
      <div className="fest-dates">
        <p>24th March 2025 - 26th March 2025</p>
      </div>

      {/* Glassmorphism Card */}
      <div className="glass-card">
        <h1 className="glass-title">
          Welcome to <span className="highlight">Galgotias TechFest 2025</span>
        </h1>
        <p className="glass-subtitle">
          Discover, Innovate, and Connect at the most awaited tech event of the year.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="cta-button brochure-btn" onClick={handleBrochureDownload}>
            Event Brochure
          </button>
          <button className="cta-button register-btn" onClick={handleRegisterNow}>
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroGlass;
