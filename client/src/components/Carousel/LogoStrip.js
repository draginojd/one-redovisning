import React from 'react';
import './LogoStrip.css';
import ImageGallery from '../../components/Gallery/ImageGallery';

import techstart from '../../assets/logos/techstart.svg';
import norrdesign from '../../assets/logos/norrdesign.svg';
import greenfoods from '../../assets/logos/greenfoods.svg';
import nordicai from '../../assets/logos/nordicai.svg';
import buildify from '../../assets/logos/buildify.svg';
import cloudrocket from '../../assets/logos/cloudrocket.svg';

const BRANDS = [
  { src: techstart, alt: 'TechStart' },
  { src: norrdesign, alt: 'Norr Design' },
  { src: greenfoods, alt: 'GreenFoods' },
  { src: nordicai, alt: 'Nordic AI' },
  { src: buildify, alt: 'Buildify' },
  { src: cloudrocket, alt: 'CloudRocket' },
];

export default function LogoStrip(){
  return (
    <section className="section-logos" aria-labelledby="logos-heading">
      <div className="logos-inner">
        <div className="logos-header">
          <p id="logos-heading">Förtroende från moderna företag</p>
        </div>
        <div className="logo-row" role="list">
          {BRANDS.map((b, i) => (
            <div key={i} className="logo" role="listitem">
              <img src={b.src} alt={b.alt} className="logo-img" />
            </div>
          ))}
        </div>
    {/* Image gallery preview below the logos */}
    <ImageGallery />
      </div>
    </section>
  );
}
