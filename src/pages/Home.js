import React, { useState, useRef } from 'react';
import './Pages.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!logoRef.current) return;
    
    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleLogoClick = () => {
    window.open('https://store.steampowered.com/developer/sandhill/', '_blank');
  };

  const getTiltStyle = () => {
    const maxTilt = 6; // Reduced for smoother effect
    const maxDistance = 200; // Increased for more gradual tilt
    
    if (!isHovering) {
      return {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      };
    }
    
    // Smooth tilt calculation with easing
    const tiltX = -(mousePosition.y / maxDistance) * maxTilt;
    const tiltY = (mousePosition.x / maxDistance) * maxTilt;
    
    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    };
  };

  return (
    <main className="page-home">
      <div id="home-logo-wrapper">
        <div 
          id="home-logo" 
          role="img" 
          aria-label="Sandhill Software logo"
          onClick={handleLogoClick}
        >
          <div 
            id="home-logo-box"
            ref={logoRef}
            style={getTiltStyle()}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/images/sandhill_logo.png" alt="Sandhill Software Crane Logo" />
          </div>
          <div id="home-logo-text">SANDHILL SOFTWARE</div>
        </div>
      </div>
      <div id="home-mission">
        We make video games :]
      </div>
    </main>
  );
};

export default Home;
