import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="techfest-container">
      <div className="techfest-content">
        {/* Text Content */}
        <div className="techfest-text">
          <h2>About the Conclave</h2>
          <p>
            The Galgotias University Tech Conclave 2025 is more than just an event; it’s a
            vibrant celebration of innovation, learning, and future-focused
            technology. Over three dynamic days, this fest brings together brilliant
            minds from diverse fields—technology, business, academia, and
            beyond—to foster collaboration, spark inspiration, and showcase
            advancements that shape the future. Whether you're a student, a tech
            enthusiast, or an industry professional, this fest is a hub for everyone
            passionate about making an impact through technology.
          </p>
        </div>

        {/* Image Section */}
        <div className="techfest-image">
          <img
            src="/src/assets/hack-bgremove.png"
            alt="Galgotias Tech Fest"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
