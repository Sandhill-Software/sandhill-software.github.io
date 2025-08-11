import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

import DontForgetThePhone from './pages/DontForgetThePhone';
import About from './pages/About';
import Contact from './pages/Contact';
import PicturesOfCranes from './pages/PicturesOfCranes';
import Credits from './pages/Credits';

// ScrollToTop component to handle route changes and page titles
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title based on current route
    switch (pathname) {
      case '/':
        document.title = 'Sandhill Software';
        break;

      case '/games/dont-forget-the-phone':
        document.title = 'Don\'t Forget the Phone - Sandhill Software';
        break;
      case '/misc/pictures-of-cranes':
        document.title = 'Pictures of Cranes - Sandhill Software';
        break;
      case '/misc/credits':
        document.title = 'Credits - Sandhill Software';
        break;
      case '/about':
        document.title = 'About - Sandhill Software';
        break;
      case '/contact':
        document.title = 'Contact - Sandhill Software';
        break;
      default:
        document.title = 'Sandhill Software';
    }
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/games/dont-forget-the-phone" element={<DontForgetThePhone />} />
            <Route path="/misc/pictures-of-cranes" element={<PicturesOfCranes />} />
            <Route path="/misc/credits" element={<Credits />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
