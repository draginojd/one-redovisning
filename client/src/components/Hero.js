import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero/Hero.css';

function Hero() {
  return (
    <section className="hero-section">
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
          <li>✔ Digital och modern bokföring</li>
          <li>✔ Fast månadskostnad</li>
          <li>✔ Personlig service</li>
          <li>✔ Snabb support</li>
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
