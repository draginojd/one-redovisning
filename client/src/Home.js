import React, { useEffect, useState } from 'react';
import { getRoot } from './api';
import { motion } from 'framer-motion';

function Home() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    getRoot().then(setApiMessage);
  }, []);

  return (
    <motion.section initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
      <h2>Välkommen till One Redovisning AB</h2>
      <p>{apiMessage}</p>
    </motion.section>
  );
}

export default Home;
