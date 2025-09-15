import React, { useState } from 'react';
import './SplitContact.css';

export default function SplitContact(){
  const [form, setForm] = useState({ name: '', phone: '', message: '', captcha: '' });
  const [status, setStatus] = useState(null);

  function onChange(e){
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e){
    e.preventDefault();
    // simple front-end validation
    if(!form.name || !form.phone || !form.message) return setStatus({ type: 'error', message: 'Fyll i alla fält' });
  // placeholder - integrate with /contact endpoint if desired
  setStatus({ type: 'success', message: 'Tack! Vi har fått din förfrågan och återkommer snart.' });
    setForm({ name: '', phone: '', message: '', captcha: '' });
  }

  return (
    <section className="split-contact">
      <div className="split-inner">
        <div className="split-left">
          <small className="eyebrow">One Redovisning AB</small>
          <h2>Ny kund? Vi gör övergången enkel — personlig onboarding ingår.</h2>
          <p className="lead">Som ny kund får du en skräddarsydd startplan och våra bästa digitala verktyg för att snabbt komma igång. Vi tar hand om bokföring, administration och uppföljning så att du kan fokusera på din verksamhet.</p>
          <p>Fyll i formuläret till höger så bokar vi en kostnadsfri genomgång och onboarding.</p>
        </div>
        <div className="split-right">
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              <span className="label">Namn</span>
              <input name="name" value={form.name} onChange={onChange} />
            </label>
            <label>
              <span className="label">Telefon</span>
              <input name="phone" value={form.phone} onChange={onChange} />
            </label>
            <label>
              <span className="label">Meddelande</span>
              <textarea name="message" value={form.message} onChange={onChange}></textarea>
            </label>
            <label>
              <span className="label">Skriv följande siffror i fältet (25570)</span>
              <input name="captcha" value={form.captcha} onChange={onChange} />
            </label>
            <div className="submit-row">
              <button type="submit" className="btn-send">Skicka meddelande <span aria-hidden>→</span></button>
            </div>
            {status && <p className={`form-status ${status.type}`}>{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
