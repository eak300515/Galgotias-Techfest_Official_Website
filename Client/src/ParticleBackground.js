// ParticleBackground.js
import React, { useEffect } from 'react';
import particlesJS from 'particles.js';

const ParticleBackground = () => {
  useEffect(() => {
    // Load the particles.js configuration
    particlesJS.load('particles-js', '/particlesjs-config.json', () => {
      console.log('Particles.js config loaded');
    });
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticleBackground;
