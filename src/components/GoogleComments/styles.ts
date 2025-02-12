import styled from 'styled-components';

export const GoogleWrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const GoogleTitle = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-family: 'Montserrat', serif;
	font-weight: 300;
	padding: 2rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before,
	&::after {
		content: '';
		flex: 1;
		height: 2px;
		background-color: black;
		margin: 0 1rem;
	}

	&::before {
		margin-right: 1rem;
	}

	&::after {
		margin-left: 1rem;
	}
`;

export const GoogleWrapperContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 75%;
	gap: 1rem;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const GoogleComments = styled.img`
	flex: 0 0 calc(33% - 0.5rem);
	padding: 0.8rem;
	width: 100%;

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: 0.3s;
	}

	@media (max-width: 930px) and (min-width: 750px) {
		flex: 0 0 calc(50% - 0.4rem);
	}

	@media (max-width: 749px) and (min-width: 50px) {
		flex: 0 0 calc(50% - 0.3rem);
	}
`;
