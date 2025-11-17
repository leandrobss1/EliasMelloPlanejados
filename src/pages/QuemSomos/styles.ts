import styled from "styled-components";

import bg-wood from '../../assets/img/bg-wood.jpg';


export const QSContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: auto;
	padding-top: 2rem;
	position: relative;
	overflow: hidden;
`;

export const QSTitle = styled.div`
	font-size: 2rem;
	width: 50%;

	@media (max-width: 930px) and (min-width: 768px) {
		font-size: 1.5rem;
		width: 80%;
	}

	@media (max-width: 750px) and (min-width: 50px) {
		font-size: 1.3rem;
		width: 80%;
	}
`

export const QSParagraph = styled.div`
font-size: 1.3rem;
	padding: 2rem;
	width: 80%;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 1.5rem;
		width: 90%;
	}

	strong {
		color: #ea8a01;
		
	}

`

export const PhotoContainer = styled.img`

`