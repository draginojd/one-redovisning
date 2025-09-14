import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { API_URL } from '../api';

function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
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
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2>Kontakt</h2>
      <p>Fyll i formuläret så återkommer vi så snart vi kan.</p>

      <form onSubmit={submit} style={{ display: 'grid', gap: '0.6rem', maxWidth: 520 }}>
        <input placeholder="Namn" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="E-post" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Meddelande" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <button type="submit">Skicka</button>
          {status === 'sending' && <span>Skickar...</span>}
          {status === 'sent' && <span style={{ color: 'green' }}>Tack! Meddelandet skickades.</span>}
          {status === 'error' && <span style={{ color: 'red' }}>Fel vid skickning. Försök senare.</span>}
          {status === 'validation-error' && <span style={{ color: 'orange' }}>Fyll i alla fält.</span>}
        </div>
      </form>
    </motion.section>
  );
}

export default Kontakt;
