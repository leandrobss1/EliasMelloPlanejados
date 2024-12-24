import React from 'react';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Main } from './components/Main/Main';
import Cards from './components/Cards/Cards';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Main />
			<Cards />
		</>
	);
}

export default App;
