import React from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaWallet, FaChartLine, FaUsers, FaCalendarCheck, FaRegComments, FaCalculator } from 'react-icons/fa';
import './Services.css';
import { servicesData } from './servicesData';

const iconMap = [FaCalculator, FaRegFileAlt, FaChartLine, FaWallet, FaUsers, FaCalendarCheck];

function ServicesShowcase() {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-showcase-inner">
        <div className="services-left">
          <h3 style={{ marginTop: 0, color: 'var(--color-muted)', fontSize: '0.95rem', letterSpacing: '1px' }}>Våra tjänster</h3>
          <h2 style={{ margin: '8px 0 12px', fontSize: '48px', lineHeight: 1.02, color: 'var(--color-text)', fontWeight: 500 }}>Vad kan vi erbjuda dig som kund</h2>
          <a href="/tjanster" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>Läs om våra tjänster här <span style={{ fontSize: 18 }}>→</span></a>
        </div>

        <div>
          <div className="services-grid">
            {servicesData.map((s, i) => {
              const Icon = iconMap[i] || FaRegComments;
              return (
                <motion.article className="service-card" key={s.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                  <div className="service-top">
                    <div className="service-icon" aria-hidden="true"><Icon className="service-svg" /></div>
                    <h3>{s.title}</h3>
                  </div>
                  <p className="service-desc">{s.excerpt}</p>
                  {/* homepage showcase omits bullet list for kort pitch */}
                  <div className="divider" />
                  <div className="service-cta">
                    <a className="btn-outline" href="/tjanster" aria-label={`Läs mer om ${s.title}`}>
                      <span className="btn-label">Läs mer här</span>
                      <svg className="btn-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M1 6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
