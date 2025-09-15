const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

// Configure transporter from env vars. If not present, transporter remains null and emails will be logged.
let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  // verify transporter connectivity on startup
  transporter.verify().then(() => {
    console.log('SMTP transporter verified and ready to send emails');
  }).catch((err) => {
    console.error('SMTP transporter verification failed:', err.message || err);
  });
} else {
  console.warn('SMTP not configured - contact form will log messages instead of sending email. Set SMTP_HOST, SMTP_USER and SMTP_PASS to enable.');
}

app.use(cors());
app.use(express.json());

 app.get('/', (req, res) => {
  res.send('');
}); 

app.post('/contact', async (req, res) => {
  const { firstname, lastname, email, phone, company, message } = req.body || {};
  const name = `${firstname || ''} ${lastname || ''}`.trim();
  console.log('Contact submission received:', { name, email, phone, company, message });

  if (!email || !message || !firstname) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const subject = `Kontaktformulär: ${name || email}`;
  const body = `Nytt meddelande från kontaktformulär:\n\nNamn: ${name}\nE-post: ${email}\nTelefon: ${phone || '-'}\nFöretag: ${company || '-'}\n\nMeddelande:\n${message}`;

  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: 'arminfazlikhan@gmail.com',
        subject,
        text: body,
        replyTo: email,
      });
      console.log('Email sent:', info.messageId || info.response || info);
      return res.json({ ok: true, message: 'Meddelande skickat' });
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  }

  // Fallback: log the message and return success
  console.log('SMTP not configured, logging message instead of sending:', { subject, body });
  return res.json({ ok: true, message: 'Meddelande mottaget (logged, not sent)' });
});

// Bind to all interfaces in case loopback binding is restricted on this host.
const server = app.listen(PORT, '0.0.0.0', () => {
  const addr = server.address();
  console.log(`Server running and listening on ${addr.address}:${addr.port}`);
});
