import React from 'react';
import './KnowUsSection.css'; // Import the CSS file

const KnowUsSection = () => {
  return (
    <section className="know-us-section">
      <div className="content-wrapper">
        <div className="image-container">
          {/* Placeholder for the image */}
          <div className="glass-image-placeholder">
            <img src="./src/assets/gtcglass.png" alt="Council" />
          </div>
        </div>
        <div className="text-content">
          <h1 className="section-title">Meet the Galgotias Tech Council</h1>
          <p className="section-description">
            The Galgotias Tech Council is a vibrant group of passionate individuals committed to pushing the boundaries of technology and innovation. Our council comprises skilled students who excel in various domains like web development, artificial intelligence, cybersecurity, and more.
          </p>
          <ul className="council-list">
            <li>🚀 Leadership in tech events and hackathons</li>
            <li>💻 Expertise in cutting-edge technologies</li>
            <li>🛡️ Ensuring a strong culture of cybersecurity</li>
            <li>🌐 Building innovative solutions for the future</li>
            <li>🎓 Aiding in technical workshops and education</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;
