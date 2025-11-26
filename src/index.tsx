import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import {Projetos} from './pages/Projetos/Projetos';
import {Serviços} from './pages/Serviços/Serviços';
import {QuemSomos} from './pages/QuemSomos/QuemSomos';
import {Orcamento} from './pages/Orçamento/Orcamento';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Projetos />} />
          <Route path="servicos" element={<Serviços />} />
		      <Route path="orcamento" element={<Orcamento />} />
          <Route path='quemsomos' element={<QuemSomos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
