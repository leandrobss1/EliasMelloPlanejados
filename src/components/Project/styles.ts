import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 100%;
	max-width: 90rem;

	img {
		width: 100%;
		height: 40rem;
		object-fit: contain;
	}
`;

export const CarouselTitle = styled.h1`
	font-size: 2rem;
	padding: 1rem;
	text-align: center;
	font-family: 'Montserrat', serif;
	font-weight: 300;

	strong {
		color: #ea8a01;
	}
`;
