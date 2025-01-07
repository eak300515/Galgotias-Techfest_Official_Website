import React from "react";
import { socials } from "../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-caption">
          © {new Date().getFullYear()} GU TechVerse. All rights reserved.
        </p>
        <ul className="social-links">
          {socials.map((item) => (
            <li key={item.id} className="social-item">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={item.iconUrl}
                  width={20}
                  height={20}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
