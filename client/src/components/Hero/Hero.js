import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from '../../assets/hero-photo-like.svg';

function Hero() {
  // Prefer an env-provided real photo or public file; fall back to bundled asset
  const externalPhoto =
    process.env.REACT_APP_HERO_PHOTO_URL ||
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
  const bgStyle = {
    backgroundImage: `url(${externalPhoto}), url('/hero-reference.jpg'), url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="hero-section" style={bgStyle}>
      <div className="hero-bg" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="hero-intro">VÄLKOMMEN TILL PROFESSIONELL REDOVISNING</p>
        <h1>
          One Redovisning erbjuder <br />
          moderna lösningar och <br />
          <span className="hero-highlight">personlig service</span>
        </h1>
        <p className="hero-desc">
          Vår smarta tjänst passar alla företag och ger dig som kund moderna lösningar och personlig service.
        </p>
        <ul className="hero-list">
          <li>Digital och modern bokföring</li>
          <li>Fast månadskostnad</li>
          <li>Personlig service</li>
          <li>Snabb support</li>
        </ul>
        <div className="hero-actions">
          <Link to="/kontakt" className="hero-btn primary" role="button">Kontakta oss idag</Link>
          <Link to="/tjanster" className="hero-btn">Läs mer om våra tjänster</Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
