import React, { useEffect, useState } from 'react';
import { getRoot } from '../api';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Prisuppskattning from './Prisuppskattning';

function Home() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    getRoot().then(setApiMessage);
  }, []);

  return (
    <>
  <Hero />
  <Services />
  {/* Prisuppskattning placerad direkt under "Våra tjänster" på startsidan */}
  <div style={{ marginTop: '3rem' }}>
    <Prisuppskattning />
  </div>
      <motion.section initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <p>{apiMessage}</p>
      </motion.section>
    </>
  );
}

export default Home;
