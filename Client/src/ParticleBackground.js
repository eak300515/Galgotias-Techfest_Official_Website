import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    // Ensure particles.js is loaded before calling
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particlesjs-config.json', () => {
        console.log('Particles.js config loaded');
      });
    } else {
      console.error('particlesJS is not defined');
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Ensure it's behind other content
      }}
    />
  );
};

export default ParticleBackground;
