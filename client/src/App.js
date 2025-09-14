import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OmOss from './pages/OmOss';
import Kontakt from './pages/Kontakt';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
  <Footer />
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
