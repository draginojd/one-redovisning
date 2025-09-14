import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaWallet, FaChartLine, FaUsers, FaCalendarCheck, FaRegComments, FaCalculator } from 'react-icons/fa';
import './Services.css';

const services = [
  { title: 'Löpande bokföring', bullets: ['Digitala kvitton', 'Automatisk avstämning', 'Månadsrapporter'] },
  { title: 'Årsredovisning', bullets: ['K1-K3 regelverk', 'Digitala signaturer', 'Skatteverket kontakt'] },
  { title: 'Ekonomisk analys', bullets: ['Månadsanalys', 'Nyckeltal', 'Prognoser'] },
  { title: 'Lönehantering', bullets: ['Lönespecifikationer', 'Arbetsgivardeklarationer', 'Försäkringsärenden'] },
  { title: 'Rådgivning', bullets: ['Skatteoptimering', 'Företagsstruktur', 'Investeringsbeslut'] },
  { title: 'Månadsuppföljning', bullets: ['Månatlig rapport', 'Personliga möten', 'Proaktiv rådgivning'] }
];

function IconBookkeeping(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M3 6h18v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2z" fill="currentColor"/>
    </svg>
  );
}

function IconReport(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 4h12l4 4v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" fill="currentColor"/>
      <path d="M14 4v5h5" fill="currentColor"/>
    </svg>
  );
}

function IconAnalysis(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M7 14l3-4 4 6 5-8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function IconPayroll(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM3 20v-1a6 6 0 0112 0v1H3z" fill="currentColor"/>
    </svg>
  );
}

function IconAdvisor(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 22c0-5 4-9 10-9s10 4 10 9" stroke="currentColor" strokeWidth="1.6" fill="none"/>
    </svg>
  );
}

function IconFollowup(props){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2v6l4 2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
    </svg>
  );
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: { scale: 1.02 }
};

function Services() {
  const iconMap = [FaCalculator, FaRegFileAlt, FaChartLine, FaWallet, FaUsers, FaCalendarCheck];

  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-header">
        <h2 id="services-heading">Våra tjänster</h2>
        <p>Vi erbjuder kompletta redovisningstjänster för företag i alla storlekar. Från löpande bokföring till strategisk ekonomisk rådgivning.</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => {
          const Icon = iconMap[i] || FaRegComments;
          const isFirst = i === 0;
          return (
            <motion.article
              className={`service-card ${isFirst ? 'is-open' : ''}`}
              key={s.title}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              role="article"
            >
              <div className="service-icon" aria-hidden="true">
                <Icon className="service-svg" />
              </div>
              <h3>{s.title}</h3>
              <p className="service-desc">Professionell tjänst anpassad efter ert företags behov.</p>
              <ul className={`service-list expanded`}>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="service-cta">
                <a
                  className="btn-outline"
                  href={`/kontakt?subject=${encodeURIComponent(s.title)}`}
                  aria-label={`Kontakta oss angående ${s.title}`}
                >
                  Jag är intresserad
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
