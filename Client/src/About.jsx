import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section"
    style={{
      backgroundImage: "url('./src/assets/services/service-2.png')",
    }}>
      {/* Glassmorphic Card */}
      <div className="about-card">
        <h2 className="about-title">About the Tech Fest</h2>
        <p className="about-subtitle">At Galgotias University</p>
        <p className="about-description">
          The <span className="highlight">Galgotias University Tech Fest</span> is more than just an event; it’s a vibrant celebration of innovation, learning, and future-focused technology. Over three dynamic days, this fest brings together brilliant minds from diverse fields—technology, business, academia, and beyond—to foster collaboration, spark inspiration, and showcase advancements that shape the future.
        </p>
        <p className="about-highlight">
          Whether you're a student, a tech enthusiast, or an industry professional, this fest is a hub for everyone passionate about making an impact through technology.
        </p>
      </div>
    </section>
  );
};

export default About;
