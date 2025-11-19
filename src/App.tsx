import React from 'react';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import ScrollToTop from './components/ScrollButton/Scroll';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
          
      <Outlet />

      <ScrollToTop />
    </>
  );
}

export default App;
