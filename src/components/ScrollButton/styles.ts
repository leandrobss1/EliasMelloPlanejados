import styled from 'styled-components';

export const ScrollToTopButton = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 3rem;
	height: 3rem;
	background-color: #ea8a01;
	color: white;
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;

	&:hover {
		color: black;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	}
`;

export const ScrollToTopIcon = styled.svg`
	width: 1.5rem;
	height: 1.5rem;
`;
