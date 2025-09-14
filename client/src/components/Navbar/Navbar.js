import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Tjänster', to: '/tjanster' },
  { label: 'Prisuppskattning', to: '/prisuppskattning' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Kontakt', to: '/kontakt' },
  { label: 'Jobba hos oss', to: '/jobba-hos-oss' }
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
        {navLinks.map((item) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
              {item.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
