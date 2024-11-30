import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex justify-center items-center">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Galgotias Tech Fest 2025</span>
        </h1>
        <p className="hero-description">
          Immerse yourself in the Future of Technology! Galgotias University
          presents the Tech Fest—where innovation meets inspiration.
        </p>
        <button className="cta-button" onClick={handleScrollToForm}>
          Join the Fest
        </button>
      </div>
    </section>
  );
};

export default Hero;
