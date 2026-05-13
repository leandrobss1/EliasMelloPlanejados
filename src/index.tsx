import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import { Projetos } from './pages/Projetos/Projetos';
import { Serviços } from './pages/Serviços/Serviços';
import { QuemSomos } from './pages/QuemSomos/QuemSomos';
import { Orcamento } from './pages/Orçamento/Orcamento';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ProjetoGaleria } from './pages/Projetos/ProjetoGaleria';

import LoginAdmin from './pages/Admin/LoginAdmin';

import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projetos />} />
          <Route path="projects/:id" element={<ProjetoGaleria />} />
          <Route path="services" element={<Serviços />} />
          <Route path="budget" element={<Orcamento />} />
          <Route path="about-us" element={<QuemSomos />} />

          <Route path="login" element={<LoginAdmin />} />
          <Route
            path="admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
