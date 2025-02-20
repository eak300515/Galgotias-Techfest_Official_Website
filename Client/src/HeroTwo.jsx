import React from 'react';
import './HeroTwo.css';

const HeroTwo = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    const fileUrl = "./Galgotias_TechVerse_Brochure_2025.pdf"; // Our Event Brochure.
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Galgotias_TechVerse_Brochure_2025.pdf";
    link.click();
    window.open(fileUrl, "_blank");
  };

  return (
    <>
      {/* Particle Background */}

      <section className="hero-two-bg min-h-screen flex items-center relative">
        {/* Loading Animation */}
        <div className="hero-two-animation-wrapper">
          <div className="hero-two-image">
            <img
              src="./src/assets/festlogo2.jpg" // Use your logo here
              alt="Tech Conclave"
              className="loading-logo" // Add a class for styling
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="hero-two-content relative z-10">
          <h1 className="hero-two-title">
            Experience the <span className="highlight">Future of Innovation</span> at
            <span className="highlight-tech"> Galgotias TechConclave 2025</span>
          </h1>
          <div className="hero-two-buttons">
            <button className="btn" onClick={handleDownloadBrochure}>Event Brochure</button>
            <button className="btn" onClick={handleScrollToForm}>Register Now</button>
          </div>
          <h1 className="hero-two-title"><span className="highlight"> March 2025...</span></h1>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;