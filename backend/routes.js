const express = require('express');
const router = express.Router();
const sendMail = require('./mailer');

router.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendMail(name, email, phone, message);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.LOG_EMAIL &&
    password === process.env.LOG_PASSWORD
  ) {
    return res.json({ token: 'fake-jwt-now' });
  }

  return res.status(401).json({ error: 'Ops. Algo deu errado!' });
});

module.exports = router;
