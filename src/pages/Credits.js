import React, { useEffect } from 'react';
import './Pages.css';

const Credits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CreditSection = ({ title, children }) => (
    <section className="credit-section">
      <h2>{title}</h2>
      {children}
    </section>
  );

  const CreditItem = ({ label, value, link, color }) => (
    <div className="credit-item">
      <span className="credit-label">{label}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="credit-link">
          {value}
        </a>
      ) : (
        <span className="credit-value" style={color ? { color } : {}}>
          {value}
        </span>
      )}
    </div>
  );

  const ColorSwatch = ({ name, hex, color }) => (
    <div className="color-swatch">
      <div className="color-preview" style={{ backgroundColor: hex }}></div>
      <div className="color-info">
        <span className="color-name">{name}</span>
        <span className="color-hex" style={{ color }}>{hex}</span>
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="credits-container">
        <header className="credits-header">
          <h1>Credits</h1>
        </header>

        <div className="credits-content">
                                           <CreditSection title="General">
              <CreditItem 
                label="Website created and designed by"
                value="Jaxkey"
              />
              <CreditItem 
                label="With heavy design inspiration from"
                value="teamsalvato.com — Team Salvato"
                link="https://teamsalvato.com/"
              />
              <CreditItem 
                label="Repository"
                value="Sandhill Software Website Repository"
                link="https://github.com/Sandhill-Software/sandhill-software.github.io"
              />
              <CreditItem 
                label="Hosting"
                value="GitHub Pages"
                link="https://pages.github.com/"
              />
              <CreditItem 
                label="Domain provider"
                value="Porkbun"
                link="https://porkbun.com/"
              />
            </CreditSection>

                      <CreditSection title="Assets">
             <CreditItem 
               label="Logos created by"
               value="Jaxkey (for now lol)"
             />
             <CreditItem 
               label="DFtP Art"
               value="Wenart"
               link="https://www.deviantart.com/wenart"
             />
           </CreditSection>

          <CreditSection title="Typography">
            <CreditItem 
              label="Terminal F4"
              value="Terminal F4"
              link="https://www.dafont.com/terminal-f4.font"
            />
            <CreditItem 
              label="VCR OSD Mono"
              value="VCR OSD Mono"
              link="https://www.dafont.com/vcr-osd-mono.font"
            />
          </CreditSection>



          <CreditSection title="Sandhill Software Colors">
            <div className="colors-grid">
              <ColorSwatch 
                name="Red"
                hex="#DC143C"
                color="#DC143C"
              />
              <ColorSwatch 
                name="White"
                hex="#FFFFFF"
                color="#FFFFFF"
              />
              <ColorSwatch 
                name="Grey"
                hex="#191919"
                color="#909090"
              />
            </div>
            {/* Ah! You caught me... The grey is a lie! #191919 is barely visible on this background haha. */}
          </CreditSection>
        </div>
      </div>
    </div>
  );
};

export default Credits;
