import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Tjänster', to: '/tjanster' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Kontakt', to: '/kontakt' },
  { label: 'Jobba hos oss', to: '/jobba-hos-oss' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  // toggle body scroll lock when mobile menu is open
  React.useEffect(() => {
    if (open) {
  document.body.classList.add('no-scroll');
  document.body.classList.add('menu-open');
    } else {
  document.body.classList.remove('no-scroll');
  document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <motion.nav className="navbar" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="navbar-logo">
        <div className="logo-text">
          <span className="main">One <span className="brand">Redovisning</span></span>
          <span className="sub">Bokning • Rådgivning • Redovisning</span>
        </div>
      </div>
      <button className={`hamburger ${open ? 'is-open' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

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

      {/* Mobile nav overlay */}
      {open && (
        <div className="mobile-nav">
          <ul>
            {navLinks.map((item) => (
              <li key={item.label} onClick={() => setOpen(false)}>
                <NavLink to={item.to} className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
