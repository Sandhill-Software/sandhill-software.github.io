import React, { useEffect } from 'react';
import './Pages.css';

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-contact">
      <div className="contact-header">
        <div className="contact-logo">
          <img src="/images/sandhill_logo_square.png" alt="Sandhill Software" />
        </div>
        <h1 className="contact-title">Sandhill Software</h1>
        <p className="contact-note">
          <span className="important-label">IMPORTANT:</span>
          <span className="note-text">All Sandhill Software replies will be from <u>sandhillsoftware@gmail.com</u>. For faster responses, use the appropriate contact email below.</span>
        </p>
      </div>
      
      <article className="article">
        <h2>Technical Support</h2>
        <p>For technical support, bug reports, or help with our games, please email <a href="mailto:support@sandhill.dev">support@sandhill.dev</a>.</p>
        
        <h2>Business Inquiries</h2>
        <p>If you're looking to reach out for any of the following, please email <a href="mailto:buisness@sandhill.dev">buisness@sandhill.dev</a>:</p>
        <ul>
          <li>Business or partnership proposals</li>
          <li>Collaboration opportunities (merch, events, or other creative avenues)</li>
          <li>Brand or content multimedia licensing</li>
        </ul>
        
        <h2>General Contact</h2>
        <p>For questions, comments, suggestions, or if you just want to chat, please email <a href="mailto:jaxkey@sandhill.dev">jaxkey@sandhill.dev</a>.</p>
      </article>
    </div>
  );
};

export default Contact;
