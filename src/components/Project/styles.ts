import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 100%;
	max-width: 90rem;
	background-color: #131010;
	img {
		width: 100%;
		height: 38rem;
		object-fit: contain;
	}
`;

export const CarouselTitle = styled.h1`
	font-size: 2rem;
	padding: 1rem;
	text-align: center;
	font-family: 'Montserrat', serif;
	font-weight: 300;
	color: white;

	strong {
		color: #ea8a01;
	}
`;

export const CarouselNavigation = styled.div`
	.swiper-button-next,
	.swiper-button-prev {
		color: #ff5733;
		transition: color 0.3s ease, box-shadow 0.3s ease;

		border-radius: 50%;

		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: white;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		}
	}

	@media (max-width: 720px) {
		.swiper-button-next,
		.swiper-button-prev {
			color: #3498db;
		}
	}
`;
