const nodemailer = require("nodemailer");

async function sendMail(name, email, phone, message) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Formulário do Site" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL, 
    subject: "Novo orçamento recebido",
    html: `
      <h2>Novo orçamento</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  });
}

module.exports = sendMail;
