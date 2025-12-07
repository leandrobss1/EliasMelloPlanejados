const express = require("express");
const router = express.Router();
const sendMail = require("./mailer");

router.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendMail(name, email, phone, message);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar email" });
  }
});

module.exports = router;
