import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const SLIDES = [
  { name: 'Elin A.', role: 'VD, TechStart AB', quote: 'One Redovisning har förenklat vår ekonomi och gett oss trygghet att växa snabbare.' },
  { name: 'Johan P.', role: 'Grundare, Norr Design', quote: 'Snabb återkoppling och proaktiv rådgivning – precis vad vi behövde.' },
  { name: 'Sara L.', role: 'COO, GreenFoods', quote: 'Professionellt bemötande och tydliga rapporter varje månad. Rekommenderas!' }
];

// Photographic slideshow shown above the testimonials
const SLIDESHOW_IMAGES = [
  // Royalty-free Unsplash images (hotlinked); replace with local assets if desired
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop'
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 })
};

// Directional slide variants for the photo slideshow
const imageVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 })
};

// Reduced-motion variant uses crossfade only
const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

function initials(name){
  return name.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase();
}

export default function Testimonials(){
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDx = useRef(0);
  const total = SLIDES.length;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const go = (next) => {
    setDirection(next > index || (index === total-1 && next === 0) ? 1 : -1);
    setIndex((next + total) % total);
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // autoplay (respect reduced motion and pause state)
  useEffect(() => {
    if (prefersReduced || paused) return; 
    timeoutRef.current = setTimeout(next, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused, prefersReduced]);

  const slide = useMemo(() => SLIDES[index], [index]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDx.current = 0; };
  const onTouchMove = (e) => { if (touchStartX.current != null) touchDx.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => {
    const dx = touchDx.current;
    touchStartX.current = null; touchDx.current = 0;
    const threshold = 40;
    if (Math.abs(dx) > threshold) { dx < 0 ? next() : prev(); }
  };

  return (
    <section className="section-testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        {/* Slideshow above testimonials */}
        <div className="testimonials-slideshow" aria-hidden="true">
          <div className="slideshow-inner">
            <AnimatePresence initial={false} custom={direction}>
              {SLIDESHOW_IMAGES.length > 0 && (
                <motion.img
                  key={index % SLIDESHOW_IMAGES.length}
                  src={SLIDESHOW_IMAGES[index % SLIDESHOW_IMAGES.length]}
                  alt=""
                  className="slideshow-image"
                  custom={direction}
                  variants={prefersReduced ? fadeVariants : imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: prefersReduced ? 0 : 0.45, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <header className="testimonials-header">
          <h2 id="testimonials-heading">Vad våra kunder säger</h2>
          <p>Riktiga röster från företag som använder våra tjänster varje månad.</p>
        </header>

        <div
          className="carousel"
          role="region" aria-roledescription="carousel" aria-label="Kundcitat"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="arrows">
            <button className="arrow prev" aria-label="Föregående" onClick={prev}>
              ‹
            </button>
            <button className="arrow next" aria-label="Nästa" onClick={next}>
              ›
            </button>
          </div>

          <div className="track">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div key={index} className="slide" custom={direction}
                variants={variants} initial="enter" animate="center" exit="exit"
                transition={{ type: 'tween', duration: 0.32 }}>
                <div className="avatar" aria-hidden>{initials(slide.name)}</div>
                <div>
                  <p className="quote">“{slide.quote}”</p>
                  <div className="meta">{slide.name} · {slide.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="dots" role="tablist" aria-label="Välj citat">
            {SLIDES.map((_, i) => (
              <button key={i} className="dot" aria-current={i===index} aria-label={`Gå till citat ${i+1}`} onClick={() => go(i)} />
            ))}
          </div>

          {/* ARIA live region for screen readers announcing current slide */}
          <div className="sr-only" aria-live="polite">
            {slide.name}, {slide.role}. {slide.quote}
          </div>
        </div>
      </div>
    </section>
  );
}
