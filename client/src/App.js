import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OmOss from './pages/OmOss';
import Kontakt from './pages/Kontakt';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <BrowserRouter>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
        <footer>
          <p>© 2025 One Redovisning AB</p>
        </footer>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
