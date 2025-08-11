import React, { useEffect, useRef } from 'react';
import './Pages.css';

const DontForgetThePhone = () => {
  const steamRef = useRef(null);



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

    const steamElement = steamRef.current;

    if (steamElement) {
      observer.observe(steamElement);
    }

    return () => {
      if (steamElement) {
        observer.unobserve(steamElement);
      }
    };
  }, []);

  return (
    <div className="page page-dont-forget-the-phone">
      {/* Game Logo Link to Steam */}
      <div className="steam-logo-section">
        <a 
          href="https://store.steampowered.com/app/3388420/Dont_Forget_the_Phone/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="game-logo-link"
        >
          <div className="game-logo">
            <img 
              src="/images/dftp_text.png" 
              alt="Don't Forget the Phone" 
              className="game-logo-image"
            />
          </div>
        </a>
      </div>

      {/* YouTube Video Embed */}
      <div className="youtube-embed-section">
        <div className="youtube-container">
          <iframe
            src="https://www.youtube.com/embed/B6JFSZFYla4"
            title="Don't Forget the Phone - Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Steam Widget */}
      <div className="steam-widget-section" ref={steamRef}>
                    <div className="get-game-text">↓↓ Wishlist the Game Here ↓↓</div>
        <iframe 
          src="https://store.steampowered.com/widget/3388420/?t=Congratulations%20on%20your%20new%20position%20as%20a%20watchtower%20attendant!%20Complete%20all%20of%20your%20tasks%20before%20sunrise%2C%20but%20watch%20out%20for%20anything%20that%20may%20have%20escaped%20the%20lab%20below.%20And%20of%20course%2C%20Don't%20Forget%20the%20Phone." 
          frameBorder="0" 
          width="646" 
          height="190"
          title="Don't Forget the Phone Steam Store Widget"
        ></iframe>
      </div>

    </div>
  );
};

export default DontForgetThePhone;
