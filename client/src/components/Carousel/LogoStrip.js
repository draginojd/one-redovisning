import React from 'react';
import './LogoStrip.css';

const BRANDS = [
  'TechStart', 'Norr Design', 'GreenFoods', 'Nordic AI', 'Buildify', 'CloudRocket'
];

export default function LogoStrip(){
  return (
    <section className="section-logos" aria-labelledby="logos-heading">
      <div className="logos-inner">
        <div className="logos-header">
          <p>Förtroende från moderna företag</p>
        </div>
        <div className="logo-row" role="list">
          {BRANDS.map((b) => (
            <div key={b} className="logo" role="listitem" aria-label={`Kund: ${b}`}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
