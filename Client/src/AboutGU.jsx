import React from 'react';
import './AboutGU.css';

const AboutGU = () => {
  return (
    <section className="about-section-gu">
      {/* Left Side - Abstract Image */}
      <div className="about-image-container-gu">
        <div className="image-abstract-overlay">
          <img
            src="/src/assets/galgotiasuniversity.png"
            alt="Galgotias University"
            className="about-image-gu"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="about-content-gu">
        <h2 className="about-title-gu">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="#ff94c2" />
                <stop offset="100%" stop-color="#741ede" />
              </linearGradient>
            </defs>
            <text x="0" y="50%" fill="url(#gradient)" font-size="48px" font-weight="bold">
              About Galgotias University
            </text>
          </svg>
        </h2>
        <p className="about-subtitle-gu">A Hub of Excellence</p>
        <p className="about-description-gu">
          Galgotias University, located in the heart of Uttar Pradesh, is a beacon of academic excellence and technological innovation. With a sprawling campus and state-of-the-art facilities, it nurtures talent and fosters a culture of research, creativity, and critical thinking.
        </p>
        <p className="about-highlight-gu">
          Driven by a vision to transform education, Galgotias University is where bright minds meet to build a brighter future.
        </p>
      </div>
    </section>
  );
};

export default AboutGU;
