import React, { useState } from "react";
import * as S from "./styles";

export const Orcamento: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3333/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message || "Mensagem enviada com sucesso!");

      setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });


    } catch (error) {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <S.OrçContainer>
      <S.OrçTitle>Faça seu orçamento</S.OrçTitle>

      <S.OrçForm onSubmit={handleSubmit}>

        <div>
          <label>Nome *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mensagem *</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <S.OrçButton type="submit">Enviar</S.OrçButton>
      </S.OrçForm>
    </S.OrçContainer>
  );
};
