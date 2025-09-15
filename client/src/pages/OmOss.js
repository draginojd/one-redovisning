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
  // Royalty-free Unsplash photo (business meeting) under the Unsplash License
  const externalPhoto = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&h=900&fit=crop';
  const envPhoto = process.env.REACT_APP_OMOSS_PHOTO;
  const publicPhoto = '/omoss.jpg';
  // Inline SVG as last-resort fallback (no network/files required)
  const dataFallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
         <defs>
           <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
             <stop offset='0%' stop-color='#e6efff'/>
             <stop offset='100%' stop-color='#cfe0ff'/>
           </linearGradient>
         </defs>
         <rect width='1200' height='800' fill='url(#g)'/>
         <g fill='#0b3ea8' opacity='0.18'>
           <circle cx='200' cy='200' r='160'/>
           <circle cx='1000' cy='620' r='220'/>
           <rect x='480' y='320' width='240' height='160' rx='16'/>
         </g>
       </svg>`
    );
  // Prefer a locally provided real photo in client/public/omoss.jpg, then env override, then external URL
  const photoSrc = publicPhoto || envPhoto || externalPhoto;
  return (
    <motion.section
      className="omoss-section"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="omoss-container">
        {/* Left column image */}
        <figure className="omoss-photo">
          <img
            src={photoSrc}
            alt="Affärsmöte i modernt kontor"
            loading="lazy"
            onError={(e) => {
              // If local public image fails, try env/external, then inline SVG
              const tried = e.currentTarget.getAttribute('data-tried') || '';
              if (!tried.includes('env') && envPhoto) {
                e.currentTarget.setAttribute('data-tried','env');
                e.currentTarget.src = envPhoto;
              } else if (!tried.includes('ext')) {
                e.currentTarget.setAttribute('data-tried', tried + ' ext');
                e.currentTarget.src = externalPhoto;
              } else {
                e.currentTarget.onerror = null;
                e.currentTarget.src = dataFallback;
              }
            }}
          />
          {/* Hover overlay with title, subtitle and CTA */}
          <div className="photo-overlay" aria-hidden="true" />
          <div className="photo-content">
            <h3 className="photo-title">Vårt professionella team</h3>
            <p className="photo-sub">Möt de experter som hjälper ditt företag växa</p>
            <a href="/om-oss" className="photo-btn" role="button">Läs mer om oss →</a>
          </div>
        </figure>

        {/* Right column content */}
        <div className="omoss-content">
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
          <div className="values-block">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OmOss;
