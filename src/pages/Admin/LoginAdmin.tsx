import { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/img/lg-eliasMelo.png';

export default function LoginAdmin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert('Preencha todos os campos para continuar.');
      return;
    }

    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/admin/dashboard');
    } else {
      alert('Login inválido. Tente novamente.');
    }
  };
  return (
    <S.LoginWrapper>
      <S.LoginDiv>
        <S.LoginIcon src={LogoIcon}></S.LoginIcon>

        <S.LoginInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <S.LoginInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <S.CustomButton onClick={handleLogin}>Entrar</S.CustomButton>
      </S.LoginDiv>
    </S.LoginWrapper>
  );
}
