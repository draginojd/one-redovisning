import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_URL } from '../api';
import './Kontakt.css';

function Kontakt() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    if (subject) setForm((f) => ({ ...f, message: `Angående: ${subject}\n\n` }));
  }, []);

  async function submit(e) {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.message) {
      setStatus('validation-error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch((API_URL || '') + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('sent');
      setForm({ firstname: '', lastname: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <motion.section className="kontakt-section" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
      <header className="kontakt-header">
        <h1>Kontakta oss</h1>
        <p className="kontakt-sub">Har du frågor om våra tjänster eller vill få en kostnadsfri offert? Hör av dig så hjälper vi dig gärna.</p>
      </header>

      <div className="kontakt-container">
        <aside className="kontakt-left">
          <h3 className="section-title">Kontaktinformation</h3>

          <div className="info-list">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-body">
                <div className="info-title">Adress</div>
                <div className="info-text">Kungsgatan 12<br/>111 43 Stockholm</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-body">
                <div className="info-title">Telefon</div>
                <div className="info-text">08-123 45 67<br/>Vardagar 08:00-17:00</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-body">
                <div className="info-title">E-post</div>
                <div className="info-text">info@oneredovisning.se<br/>Vi svarar inom 24h</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div className="info-body">
                <div className="info-title">Öppettider</div>
                <div className="info-text">Mån-Fre: 08:00-17:00<br/>Helger: Stängt</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="kontakt-right">
          <div className="form-card">
            <h3>Skicka ett meddelande</h3>
            <p className="small-muted">Fyll i formuläret nedan så återkommer vi till dig inom 24 timmar.</p>

            <form className="grid-form" onSubmit={submit} aria-label="Kontaktformulär">
              <div className="col">
                <label>Förnamn
                  <input placeholder="Ditt förnamn" value={form.firstname} onChange={(e) => setForm({ ...form, firstname: e.target.value })} />
                </label>
              </div>

              <div className="col">
                <label>Efternamn
                  <input placeholder="Ditt efternamn" value={form.lastname} onChange={(e) => setForm({ ...form, lastname: e.target.value })} />
                </label>
              </div>

              <div className="col">
                <label>E-post
                  <input placeholder="din@epost.se" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
              </div>

              <div className="col">
                <label>Telefon
                  <input placeholder="070-123 45 67" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
              </div>

              <div className="col-full">
                <label>Företag
                  <input placeholder="Ditt företag (valfritt)" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </label>
              </div>

              <div className="col-full">
                <label>Meddelande
                  <textarea placeholder="Berätta om dina behov eller ställ dina frågor här..." rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </label>
              </div>

              <div className="col-full">
                <button className="btn-submit" type="submit">Skicka meddelande</button>
              </div>

              <div className="col-full consent">Genom att skicka detta formulär godkänner du att vi kontaktar dig angående din förfrågan.</div>
            </form>
          </div>
        </main>
      </div>
    </motion.section>
  );
}

export default Kontakt;
