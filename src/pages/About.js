import React, { useEffect, useRef } from 'react';
import './Pages.css';

const About = () => {
  const heroRef = useRef(null);
  const companyRef = useRef(null);
  const teamRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = [heroRef.current, companyRef.current, teamRef.current];
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="about-container">
      <div className="hero-section" ref={heroRef}>
        <img 
          className="hero-logo" 
          src="/images/sandhill_logo.png" 
          alt="Sandhill Software Logo" 
        />
        <h1 className="hero-title">est. 2024</h1>
      </div>
      
      <div className="content-section">
        <div className="company-card" ref={companyRef}>
          <h2>Sandhill Software</h2>
          <p>Sandhill Software is an independent game studio.</p>
        </div>
        
        <div className="team-section" ref={teamRef}>
          <h3>Meet the Team</h3>
                    <div className="team-member">
            <img
              className="member-avatar"
              src="/images/team/jaxkey.png"
              alt="Jaxkey"
            />
            <h2 className="member-name">Jack "Jaxkey" Bower</h2>
            <span className="member-title">Founder & Game Director</span>
                                 <div className="member-links">
                       <a href="mailto:jaxkey@sandhill.dev">
                         <i className="fa fa-envelope" aria-hidden="true"></i>
                       </a>
                       <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@_Jaxkey_">
                         <i className="fa fa-youtube-play" aria-hidden="true"></i>
                       </a>
                       <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/jaxkey_dev">
                         <i className="fa fa-twitch" aria-hidden="true"></i>
                       </a>
                       <a target="_blank" rel="noopener noreferrer" href="https://x.com/_Jaxkey_">
                         <i className="fa fa-twitter" aria-hidden="true"></i>
                       </a>
                     </div>
          </div>
          <p className="team-note">Just me for now... :]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
