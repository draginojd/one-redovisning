import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="site-footer deep">
      <div className="footer-inner">
        <div className="footer-col brand">
          <div className="logo-pill">O</div>
          <h4>One Redovisning</h4>
          <p className="muted">Professionella redovisningstjänster för moderna företag. Vi hjälper dig att hålla ordning på ekonomin så du kan fokusera på det du gör bäst.</p>
        </div>

        <div className="footer-col links">
          <h5>Snabblänkar</h5>
          <ul>
            <li><a href="/">Hem</a></li>
            <li><a href="/tjanster">Tjänster</a></li>
            <li><a href="/prisuppskattning">Prisuppskattning</a></li>
            <li><a href="/om-oss">Om oss</a></li>
            <li><a href="/jobba-hos-oss">Jobba hos oss</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h5>Kontakt</h5>
          <p className="muted">Kungsgatan 12<br/>111 43 Stockholm</p>
          <p className="muted">08-123 45 67<br/><a href="mailto:info@oneredovisning.se">info@oneredovisning.se</a></p>
        </div>
      </div>

      <hr className="footer-rule" />

      <div className="footer-bottom deep-bottom">
        <p>© {new Date().getFullYear()} One Redovisning Stockholm AB. Alla rättigheter förbehållna.</p>
        <div className="policies">
          <a href="/integritet">Integritetspolicy</a>
          <a href="/villkor">Villkor</a>
        </div>
      </div>
    </footer>
  );
}
