import styled from 'styled-components';

export const CardImageContainer = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 80%;
		height: 80%;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;
	padding-top: 1rem;
	background-color: white;
`;

export const CardsWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const CardsTitle = styled.h1`
	text-align: center;
	margin-bottom: 1rem;
	font-weight: 400;
	color: black;
	font-family: 'Montserrat', serif;

	strong {
		color: #ea8a01;
	}
`;

export const Card = styled.div`
	width: 300px;
	height: 400px;
	border-radius: 2px;
	overflow: hidden;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: transform 0.2s;
	margin: 2rem;
	background-color: #eff3ea;

	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	padding: 16px;
	height: calc(100% - 200px);
	box-sizing: border-box;
`;

export const CardTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 1rem;
	text-align: center;
`;

export const CardParagraph = styled.p`
	font-size: 1rem;
	text-align: center;
	color: black;
`;
