import React from 'react';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Main } from './components/Main/Main';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Main />
		</>
	);
}

export default App;
