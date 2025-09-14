import React from 'react';
import { motion } from 'framer-motion';

function Kontakt() {
  return (
    <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2>Kontakt</h2>
      <p>Kontakta oss via telefon eller e-post för en kostnadsfri konsultation.</p>
      <ul>
        <li>Telefon: 08-123 456</li>
        <li>E-post: info@oneredovisning.se</li>
        <li>Adress: Storgatan 1, 111 22 Stockholm</li>
      </ul>
    </motion.section>
  );
}

export default Kontakt;
