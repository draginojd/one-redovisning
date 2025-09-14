const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('One Redovisning AB API - TJENARE');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  console.log('Contact submission received:', { name, email, message });
  // TODO: persist to DB or send email
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  res.json({ ok: true, message: 'Meddelande mottaget' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
