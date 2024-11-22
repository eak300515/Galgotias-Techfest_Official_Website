import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      {/* Left Side - Image */}
      <div className="about-image-container">
        <img
          src="/src/assets/services/service-2.png"
          alt="Galgotias University"
          className="about-image"
        />
      </div>

      {/* Right Side - Content */}
      <div className="about-content">
        <h2 className="about-title">About the Tech Fest</h2>
        <p className="about-subtitle">At Galgotias University</p>
        <p className="about-description">
          The <b classname="bold">Galgotias University Tech Fest</b> is more than just an event; it’s a vibrant celebration of innovation, learning, and future-focused technology. Over three dynamic days, this fest brings together brilliant minds from diverse fields—technology, business, academia, and beyond—to foster collaboration, spark inspiration, and showcase advancements that shape the future.
        </p>
        <p className="about-highlight">
          Whether you're a student, a tech enthusiast, or an industry professional, this fest is a hub for everyone passionate about making an impact through technology.
        </p>
      </div>
    </section>
  );
};

export default About;
