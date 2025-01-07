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
    const fileUrl = "/src/assets/Galgotias_Techfest_2025_Brochure.pdf"; // Path to the PDF
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Galgotias_Techfest_2025_Brochure.pdf";
    link.click();
    window.open(fileUrl, "_blank"); // Opens the file in a new tab
  };

  return (
    <section className="hero-two-bg min-h-screen flex items-center">
      {/* Loading Animation */}
      <div className="hero-two-animation-wrapper">
        <div className="hero-two-image">
          <p className="loading-text">TechVerse 2025</p>
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
          <button className="btn" onClick={handleDownloadBrochure}>Event Brochure</button>
          <button className="btn" onClick={handleScrollToForm}>Register Now</button>
        </div>
        <h1 className="hero-two-title"><span className="highlight"> 24th - 26th March</span></h1>
      </div>
    </section>
  );
};

export default HeroTwo;
