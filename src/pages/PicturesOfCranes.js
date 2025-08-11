import React, { useEffect, useState } from 'react';
import './Pages.css';

const PicturesOfCranes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const craneImages = [
    { src: '/images/cranes/crane1.jpg', desc: '© Edward Plumer' },
    { src: '/images/cranes/crane2.jpg', desc: '© Andrew Simon' },
    { src: '/images/cranes/crane3.jpg', desc: '© Dorian Anderson' },
    { src: '/images/cranes/crane4.jpg', desc: '© Matt Felperin' },
    { src: '/images/cranes/crane5.jpg', desc: '© Dominic Garcia-Hall' },
    { src: '/images/cranes/crane6.jpg', desc: '© Anne Inga' },
    { src: '/images/cranes/crane7.jpg', desc: '© Stephen Hurst' },
    { src: '/images/cranes/crane8.jpg', desc: '© John Reynolds' },
    { src: '/images/cranes/crane9.JPG', desc: 'Jaxkey' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page">
      <div className="cranes-container">
        <div className="cranes-header">
          <a 
            href="https://www.allaboutbirds.org/guide/Sandhill_Crane/overview" 
            target="_blank" 
            rel="noopener noreferrer"
            className="crane-title-link"
          >
            <h1>Sandhill Crane</h1>
          </a>
          <div className="crane-description">
            <p>The Sandhill Software namesake comes from the Sandhill Crane, a species of large crane from North America.</p>
          </div>
        </div>

        <div className="crane-gallery">
          {craneImages.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.desc} />
              <div className="gallery-desc">{image.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.desc} />
            <div className="modal-desc">{selectedImage.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PicturesOfCranes;
