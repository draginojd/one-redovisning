import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from '../../assets/hero-photo-like.svg';
import vectorImg from '../../assets/vector.png';
import { AnimatedText } from '../Animated/AnimatedText';

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
      <div className="hero-inner">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <AnimatedText as="p" className="hero-intro" text="VÄLKOMMEN TILL PROFESSIONELL REDOVISNING" delay={0.1} />
          <h1>
            <AnimatedText as="span" text={`One Redovisning erbjuder`} delay={0.18} />
            <br />
            <AnimatedText as="span" text={`moderna lösningar och`} delay={0.26} />
            <br />
            <AnimatedText as="span" text={`personlig service`} delay={0.34} className="hero-highlight" />
          </h1>
          <AnimatedText as="p" className="hero-desc" text={`Vår smarta tjänst passar alla företag och ger dig som kund moderna lösningar och personlig service.`} delay={0.44} />
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
        <div className="hero-illustration" aria-hidden>
          <img src={vectorImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
