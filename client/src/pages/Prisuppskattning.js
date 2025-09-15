import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../components/Animated/AnimatedText';
import './Prisuppskattning.css';

const BASE_FEE = 1500; // SEK
const PRICE_PER_SALARY = 150; // SEK per lönehantering
const PRICE_PER_INVOICE = 15; // SEK per faktura
const PRICE_PER_RECEIPT = 8; // SEK per kvitto

function formatSEK(num) {
  // Format like 3 775 SEK
  const s = Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${s} SEK`;
}

export default function Prisuppskattning() {
  const [loner, setLoner] = useState(10);
  const [fakturor, setFakturor] = useState(25);
  const [kvitton, setKvitton] = useState(50);

  const breakdown = useMemo(() => {
    const lonCost = loner * PRICE_PER_SALARY;
    const fakCost = fakturor * PRICE_PER_INVOICE;
    const kvitCost = kvitton * PRICE_PER_RECEIPT;
    const total = BASE_FEE + lonCost + fakCost + kvitCost;
    return { lonCost, fakCost, kvitCost, total };
  }, [loner, fakturor, kvitton]);

  return (
    <section className="price-section">
      <div className="price-header">
        <div className="emoji" aria-hidden>💡</div>
        <h1 className="price-title">
          <AnimatedText text="Få en prisuppskattning" as="span" />
        </h1>
        <p className="price-sub">
          <AnimatedText text="Använd vår kalkylator för att få en uppskattning av vad våra tjänster skulle kosta för ditt företag" as="span" delay={0.3} />
        </p>
      </div>

      <div className="price-grid">
        {/* Left card: sliders */}
        <motion.div className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.22,0.9,0.24,1] }}>
          <div className="card-header">
            <h3>
              <AnimatedText text="Prisuppskattning" as="span" />
            </h3>
            <p>
              <AnimatedText text="Justera värdena nedan för att få en personlig prisuppskattning" as="span" delay={0.15} />
            </p>
          </div>

          <div className="control">
            <label>ANTAL LÖNER PER MÅNAD</label>
            <span className="value">{loner}</span>
            <input type="range" min="0" max="100" value={loner} onChange={(e) => setLoner(Number(e.target.value))} />
          </div>

          <div className="control">
            <label>ANTAL FAKTUROR PER MÅNAD</label>
            <span className="value">{fakturor}</span>
            <input type="range" min="0" max="100" value={fakturor} onChange={(e) => setFakturor(Number(e.target.value))} />
          </div>

          <div className="control">
            <label>ANTAL KVITTON PER MÅNAD</label>
            <span className="value">{kvitton}</span>
            <input type="range" min="0" max="100" value={kvitton} onChange={(e) => setKvitton(Number(e.target.value))} />
          </div>

          <button className="btn-primary" type="button">Begär prisuppskattning</button>
        </motion.div>

        {/* Right column: total + breakdown */}
        <div className="right-col">
          <motion.div className="card highlight" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.22,0.9,0.24,1], delay: 0.1 }}>
            <h4>Uppskattad månadskostnad</h4>
            <div className="total">{formatSEK(breakdown.total)}</div>
            <div className="note">per månad exklusive moms</div>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.22,0.9,0.24,1], delay: 0.15 }}>
            <h3>Prisuppdelning</h3>
            <div className="rows">
              <div className="row"><span>Grundavgift</span><span>{formatSEK(BASE_FEE)}</span></div>
              <div className="row"><span>Lönehantering ({loner} st)</span><span>{formatSEK(breakdown.lonCost)}</span></div>
              <div className="row"><span>Fakturahantering ({fakturor} st)</span><span>{formatSEK(breakdown.fakCost)}</span></div>
              <div className="row"><span>Kvittohantering ({kvitton} st)</span><span>{formatSEK(breakdown.kvitCost)}</span></div>
            </div>
            <div className="breakdown-total" role="group" aria-label="Totalt per månad">
              <div className="breakdown-total__label">
                <span>Totalt</span>
                <span>per månad</span>
              </div>
              <div className="breakdown-total__value">
                <span className="amount">{Math.round(breakdown.total).toLocaleString('sv-SE')}</span>
                <span className="unit">SEK</span>
              </div>
            </div>
          </motion.div>

          <div className="disclaimer">
            <strong>Obs:</strong> Detta är en preliminär uppskattning. Det exakta priset kan variera beroende på komplexiteten i ditt företags behov. Kontakta oss för en detaljerad offert.
          </div>
        </div>
      </div>
    </section>
  );
}
