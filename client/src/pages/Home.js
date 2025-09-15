import React, { useEffect, useState } from 'react';
import { getRoot } from '../api';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import ServicesHeroGrid from '../components/Services/ServicesHeroGrid';
import Prisuppskattning from './Prisuppskattning';
import Testimonials from '../components/Carousel/Testimonials';
import ImageGallery from '../components/Gallery/ImageGallery';
import SplitContact from '../components/Contact/SplitContact';
import ServicesShowcase from '../components/Services/ServicesShowcase';

function Home() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    getRoot().then(setApiMessage);
  }, []);

  return (
    <>
  <Hero />
  {/* Only show the hero tiles from 'Våra tjänster' on the Home page */}
  <ServicesHeroGrid />
  {/* Prisuppskattning placed under the services hero tiles */}
  <div style={{ marginTop: '3rem' }}>
    <Prisuppskattning />
  </div>
  {/* Full services showcase (intro + 3x2 cards) */}
  <ServicesShowcase />
  <Testimonials />
  <ImageGallery />
  <SplitContact />

      <motion.section initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <p>{apiMessage}</p>
      </motion.section>
    </>
  );
}

export default Home;
