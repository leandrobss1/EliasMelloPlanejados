import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Serviços from './pages/Serviços';
import { Orçamento } from './pages/Orçamento';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import QuemSomos from './pages/QuemSomos';


register();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="servicos" element={<Serviços />} />
		      <Route path="orcamento" element={<Orçamento />} />
          <Route path='quemsomos' element={<QuemSomos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
