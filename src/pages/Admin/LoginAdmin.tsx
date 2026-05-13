import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'gabrielelias') {
      localStorage.setItem('admin-auth', 'true');

      navigate('/admin-dashboard');
    } else {
      alert('Senha incorreta');
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
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
