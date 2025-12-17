import React, { useState } from "react";
import styled from 'styled-components';
import * as S from "./styles";
import * as HeaderStyles from "../../components/Header/styles";
import { MapLocation } from "../../components/MapLocation/MapLocation";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";


export const CustomButton = styled(HeaderStyles.OrçButton)`
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  margin-bottom: 0.50rem;
  border-radius: 0;
  background-color: #ffff;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    font-weight: 700;
    border-bottom: 4px solid #000000;
		border-right: 4px solid #000000; 
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

  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorized) {
    alert("Você precisa autorizar o uso dos dados para enviar a mensagem.");
    return;
  }

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
      
      <S.OrçTitle>Nossos contatos</S.OrçTitle>

      <S.OrçGrid>

      <S.OrçForm onSubmit={handleSubmit}>
        <S.OrçTitleContain>Envie sua mensagem</S.OrçTitleContain>
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

        <S.OrçWrapper/>
         <S.OrçLabelVerify>
             <S.OrçInputVerify
                 type="checkbox"
                  checked={authorized}
                  onChange={(e) => setAuthorized(e.target.checked)}
                  />                 
                  *Autorizo que os meus dados pessoais (nome, e-mail, telefone) sejam utilizados para finalidade de retorno ao contato solicitado.     
          </S.OrçLabelVerify>
        <S.OrçWrapper/>
      </S.OrçForm>
      
      <S.OrçContain>

      <S.OrçWrapperRight>

      <S.OrçTitleContain>Fale conosco</S.OrçTitleContain>

      </S.OrçWrapperRight>

      </S.OrçContain>     

     </S.OrçGrid>

      <MapLocation/>
    </S.OrçContainer>
  );
};
