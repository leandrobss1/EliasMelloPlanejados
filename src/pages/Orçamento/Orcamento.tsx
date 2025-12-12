import React, { useState } from "react";
import styled from 'styled-components';
import * as S from "./styles";
import * as HeaderStyles from "../../components/Header/styles";

export const CustomButton = styled(HeaderStyles.OrçButton)`
  font-family: "Source Code Pro", monospace;
  font-weight: 700;

  &:hover {
    font-weight: 700;
  }
  `


export const Orcamento: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const formatPhone = (value: string) => {
  value = value.replace(/\D/g, ""); 

  if (value.length > 10) {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: name === "phone" ? formatPhone(value) : value
  });
};

  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.OrçContainer>
      <S.OrçTitle>Faça seu orçamento</S.OrçTitle>

      <S.OrçForm onSubmit={handleSubmit}>

        <S.OrçDiv>
          <S.OrçLabel>Nome </S.OrçLabel>
          <S.OrçInput
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
          />
        </S.OrçDiv>

        <S.OrçDiv>
          <S.OrçLabel>Email </S.OrçLabel>
          <S.OrçInput
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu melhor email"
          />
        </S.OrçDiv>

        <S.OrçDiv>
          <S.OrçLabel>Telefone </S.OrçLabel>
          <S.OrçInput
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="EX: (99) 99999-9999"
            />
        </S.OrçDiv>

        <S.OrçDiv>
          <S.OrçLabel>Mensagem </S.OrçLabel>
          <S.OrçTextarea
            name="message"
            required
            maxLength={100}
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte-nos sobre o seu projeto dos sonhos..."
          />
        </S.OrçDiv>

        <CustomButton type="submit" disabled={isLoading}>{isLoading ? "Enviando..." : "Enviar"}</CustomButton>
      </S.OrçForm>
    </S.OrçContainer>
  );
};
