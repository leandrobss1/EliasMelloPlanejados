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
`;

export const GoogleWrapperContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 50%;
	gap: 1rem;
`;

export const GoogleComments = styled.img`
	flex: 0 0 calc(50% - 0.5rem);
	padding: 0.8rem;
	width: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		transition: 0.1s;
	}
`;
