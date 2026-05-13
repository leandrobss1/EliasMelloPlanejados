import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
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
    <div
      style={{
        padding: '40px',
      }}
    >
      <h1>Login Admin</h1>

      <input
        type="text"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
