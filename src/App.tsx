import React from 'react';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Main } from './components/Main/Main';
import Cards from './components/Cards/Cards';
import { Carousel } from './components/Project/Carousel';
import ScrollToTop from './components/ScrollButton/Scroll';
import { Google } from './components/GoogleComments/Google';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Main />
			<Cards />
			<Carousel />

			<ScrollToTop />
			<Google />
		</>
	);
}

export default App;
