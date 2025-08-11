import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sandhill Software</h3>
          <p>Creating games we hope you'll enjoy playing as much as we enjoyed making them.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Games</h4>
          <ul>
            <li><Link to="/games/dont-forget-the-phone">Don't Forget the Phone</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Misc</h4>
          <ul>
            <li><Link to="/misc/pictures-of-cranes">Pictures of Cranes</Link></li>
            <li><Link to="/misc/credits">Credits</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <Link to="/contact">Contact</Link>
            <a href="https://www.youtube.com/@_Sandhill" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
            <a href="https://x.com/__Sandhill" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2024 - Present, Sandhill Software</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
