import React from 'react';
import { motion } from 'framer-motion';
import Home from './Home';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <header>
        <h1>One Redovisning AB</h1>
        <p>Din professionella redovisningsbyrå</p>
      </header>
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
