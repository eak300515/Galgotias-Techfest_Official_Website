import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex justify-between items-center px-8 lg:px-16">
      {/* Left Side Content */}
      <div className="hero-content text-white">
        <h1 className="hero-title">
          <span className="highlight">Galgotias Tech Conclave 2025</span>
        </h1>
        <p className="hero-description">
          Immerse yourself in the Future of Technology! Galgotias University presents the Tech Conclave—where innovation meets inspiration.
        </p>
        <ul className="hero-highlights">
          <li>A three-day immersive experience with cutting-edge tech exhibits, renowned speakers, and interactive workshops.</li>
          <li>Special events like Robotic RoboWars, Esports, and EDM Night.</li>
          <li>Meet and learn from tech giants like Sam Altman (OpenAI), Anupam Mittal, Narayan Murthy, and more.</li>
        </ul>
        <button className="cta-button" onClick={handleScrollToForm}>Join the Verse</button>
      </div>
    </section>
  );
};

export default Hero;
