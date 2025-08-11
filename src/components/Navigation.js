import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [miscDropdownOpen, setMiscDropdownOpen] = useState(false);
  const location = useLocation();

  const handleImageError = (e) => {
    // Fallback to text if image fails to load
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'block';
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav id="navbar">
      <div id="nav-logo">
        <Link to="/">
          <img 
            src="/images/sandhill_logo.png" 
            alt="Sandhill Software" 
            onError={handleImageError}
          />
          <span style={{ display: 'none', fontSize: '12px', fontWeight: 'bold' }}>
            SANDHILL
          </span>
        </Link>
      </div>
      <div id="nav-list">
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li 
            className={`dropdown ${isActive('/games/dont-forget-the-phone') ? 'active' : ''}`}
            onMouseEnter={() => setGamesDropdownOpen(true)}
            onMouseLeave={() => setGamesDropdownOpen(false)}
          >
            <button 
              className={`dropdown-toggle ${isActive('/games/dont-forget-the-phone') ? 'active' : ''}`}
              onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
            >
              GAMES
              <i className="fa fa-caret-down"></i>
            </button>
            {gamesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/games/dont-forget-the-phone">Don't Forget the Phone</Link>
              </div>
            )}
          </li>
          <li 
            className={`dropdown ${isActive('/misc') ? 'active' : ''}`}
            onMouseEnter={() => setMiscDropdownOpen(true)}
            onMouseLeave={() => setMiscDropdownOpen(false)}
          >
            <button 
              className={`dropdown-toggle ${isActive('/misc') ? 'active' : ''}`}
              onClick={() => setMiscDropdownOpen(!miscDropdownOpen)}
            >
              MISC.
              <i className="fa fa-caret-down"></i>
            </button>
            {miscDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/misc/pictures-of-cranes">Pictures of Cranes</Link>
                <Link to="/misc/credits">Credits</Link>
              </div>
            )}
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">
              ABOUT
            </Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
