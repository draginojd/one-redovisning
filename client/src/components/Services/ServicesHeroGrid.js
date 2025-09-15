import React from 'react';
import './Services.css';

function ServicesHeroGrid() {
  return (
    <div className="services-hero-grid" aria-hidden="false">
      <a
        className="image-tile"
        href="/tjanster"
        aria-label="Läs mer om våra tjänster: Digital bokföring"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="tile-overlay" />
        <div className="tile-content">
          <h3 className="tile-title">Digital bokföring</h3>
          <p className="tile-sub">Moderna verktyg för effektiv ekonomihantering</p>
          <span className="tile-btn" role="button">Läs mer om våra tjänster →</span>
        </div>
      </a>

      <a
        className="image-tile"
        href="/kontakt"
        aria-label="Kontakta vårt team: Expertis och precision"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="tile-overlay" />
        <div className="tile-content">
          <h3 className="tile-title">Expertis & precision</h3>
          <p className="tile-sub">Professionell rådgivning från erfarna konsulter</p>
          <span className="tile-btn" role="button">Kontakta vårt team →</span>
        </div>
      </a>
    </div>
  );
}

export default ServicesHeroGrid;
