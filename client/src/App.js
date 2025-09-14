import React from 'react';
import { motion } from 'framer-motion';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Navbar />
      <main>
        <Home />
        <section>
          <h2>Tjänster</h2>
          <ul>
            <li>Bokföring</li>
            <li>Lönehantering</li>
            <li>Årsredovisning</li>
          </ul>
        </section>
        <section>
          <h2>Om oss</h2>
          <p>Vi hjälper företag med trygg och effektiv redovisning. Kontakta oss för en kostnadsfri konsultation!</p>
        </section>
      </main>
      <footer>
        <p>© 2025 One Redovisning AB</p>
      </footer>
    </motion.div>
  );
}

export default App;
