import React from 'react';
import { motion } from 'framer-motion';

function OmOss() {
  return (
    <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2>Om oss</h2>
      <p>
        One Redovisning AB är ett modernt redovisningsbolag baserat i Stockholm. Vi erbjuder
        digitala lösningar, personlig service och rådgivning för små och medelstora företag.
      </p>
      <p>Vårt team består av auktoriserade redovisningskonsulter med lång erfarenhet.</p>
    </motion.section>
  );
}

export default OmOss;
