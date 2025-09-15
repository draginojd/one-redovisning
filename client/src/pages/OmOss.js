import React from 'react';
import { motion } from 'framer-motion';
import './OmOss.css';

const values = [
  {
    title: 'Precision',
    text: 'Vi levererar exakta och tillförlitliga redovisningstjänster som du kan lita på.',
    icon: '🎯',
  },
  {
    title: 'Personlig service',
    text: 'Varje kund är unik och får skräddarsydda lösningar för sina specifika behov.',
    icon: '💙',
  },
  {
    title: 'Expertis',
    text: 'Vårt team består av auktoriserade redovisningskonsulter med gedigen erfarenhet.',
    icon: '🧾',
  },
  {
    title: 'Partnerskap',
    text: 'Vi ser oss som din partner i företagets framgång och tillväxt.',
    icon: '🤝',
  },
];

function OmOss() {
  return (
    <motion.section
      className="omoss-section"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="omoss-container">
        <div className="omoss-left">
          <div className="eyebrow">Om One Redovisning Stockholm AB</div>
          <h1 className="omoss-title">
            Din pålitliga partner inom <span className="accent">redovisning</span> och ekonomi
          </h1>

          <p className="lead">
            One Redovisning Stockholm AB är en modern redovisningsbyrå som kombinerar
            traditionell expertis med digitala lösningar. Vi hjälper företag av alla storlekar att
            hålla ordning på sin ekonomi och fatta rätt beslut.
          </p>

          <p>
            Vårt fokus ligger på att förenkla det komplexa och ge dig som företagare mer tid att ägna
            dig åt det du gör bäst - att driva och utveckla ditt företag.
          </p>

          <div className="stats-row">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Nöjda kunder</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">År av erfarenhet</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Kundnöjdhet</div>
            </div>
            <div className="stat">
              <div className="stat-number">24h</div>
              <div className="stat-label">Svarstid</div>
            </div>
          </div>
        </div>

        <aside className="omoss-right">
          <h3 className="values-heading">Våra värderingar</h3>
          <div className="values-list">
            {values.map((v) => (
              <article className="value-card" key={v.title}>
                <div className="value-icon" aria-hidden>
                  {v.icon}
                </div>
                <div className="value-body">
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-text">{v.text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </motion.section>
  );
}

export default OmOss;
