import React from 'react';
import { motion } from 'framer-motion';
import './Navbar/Navbar.css';

const navLinks = [
  'Hem',
  'Tjänster',
  'Prisuppskattning',
  'Om oss',
  'Kontakt',
  'Jobba hos oss'
];

function Navbar() {
  return (
    <motion.nav className="navbar" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="navbar-logo">
        <motion.div className="logo-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>O</motion.div>
        <div className="logo-text">
          <span className="main">One Redovisning</span>
          <span className="sub">Stockholm AB</span>
        </div>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link, idx) => (
          <motion.li
            key={link}
            whileHover={{ color: '#4f5bd5', scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {link}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
