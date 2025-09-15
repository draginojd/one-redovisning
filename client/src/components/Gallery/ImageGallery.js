import React from 'react';
import './ImageGallery.css';

const TESTIMONIALS = [
  { company: 'Nordic Harbor AB', author: 'Lina Berg', title: 'VD', excerpt: 'Vi har samarbetat med One Redovisning i över två år. Under den tiden har de hjälpt oss bygga upp stabila rutiner för löpande bokföring, rapportering och kassaflödesprognoser. Deras proaktiva rådgivning har lett till förbättrade rutiner och mer tid för oss att fokusera på tillväxt och kundrelationer.' },
  { company: 'Västkust Energi', author: 'Erik Holm', title: 'Ekonomichef', excerpt: 'One Redovisning tog snabbt kontroll över vår redovisning vid en omstrukturering. Kommunikationen har varit klar och effektiv, och vi uppskattar deras förmåga att förklara komplexa frågor på ett tydligt sätt. Tack vare deras insatser har vi bättre uppföljning och mer förutsägbar likviditet.' },
  { company: 'Skog & Stad Fastigheter', author: 'Maja Lind', title: 'Styrelseordförande', excerpt: 'Samarbetet har gett oss trygghet i löpande ekonomihantering och större insyn i våra fastighetsprojekt. One Redovisning har levererat både snabb support och strategisk rådgivning, vilket har hjälpt oss fatta bättre beslut och effektivisera administrationen.' },
  { company: 'Luma Tech Solutions', author: 'Oscar Nilsson', title: 'Grundare', excerpt: 'Deras digitala arbetsflöden och personliga support har gjort vår ekonomi mindre tidskrävande. Vi har infört automatiseringar för fakturahantering och fått löpande analyser som hjälper oss prioritera investeringar och resurser.' },
];

export default function ImageGallery(){
  return (
    <div className="testimonials-bleed-full">
      <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-hero">
  <small className="eyebrow">One Redovisning AB</small>
        <h2 id="testimonials-heading">Vad säger våra kunder</h2>
        <p className="sub">Vi är otroligt stolta över alla våra nöjda kunder och anstränger oss lite extra för att ni ska känna er väl omhändertagna</p>
  </div>
      
  <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className="testimonial-card">
            <div className="card-inner">
              <div className="card-meta">
                <h3 className="card-company">{t.company}</h3>
                <small className="card-author">Av {t.author}{t.title ? `, ${t.title}` : ''}</small>
              </div>
              <h4 className="card-heading">Om samarbetet</h4>
              <p className="card-text">{t.excerpt}</p>
              <a className="card-cta" href="/testimonials">Läs mer</a>
            </div>
          </article>
        ))}
      </div>
    </section>
    </div>
  );
}
