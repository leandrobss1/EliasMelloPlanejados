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

	@media (max-width: 930px) and (min-width: 768px) {
		img {
			height: 25rem;
		}
	}

	@media (max-width: 750px) and (min-width: 387px) {
		width: 100%;

		img {
			height: 32rem;
		}
	}

	@media (max-width: 386px) and (min-width: 50px) {
		width: 100%;

		img {
			height: 27rem;
		}
	}
`;

export const CarouselTitle = styled.h1`
	font-size: 2rem;
	padding: 1rem;
	text-align: center;
	font-family: 'Montserrat', serif;
	font-weight: 500;
	color: white;

	strong {
		color: #ea8a01;
	}

	@media (max-width: 930px) and (min-width: 768px) {
		font-size: 1.5rem;
		padding: 0;
		width: 100%;
	}

	@media (max-width: 750px) and (min-width: 50px) {
		font-size: 1.3rem;
		width: 100%;
	}
`;

export const CarouselNavigation = styled.div`
	.swiper-button-next,
	.swiper-button-prev {
		color: #ea8a01;
		transition: color 0.3s ease, box-shadow 0.3s ease;

		border-radius: 50%;

		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: #ff5733;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		}
	}

	.swiper-pagination-bullet {
		background-color: #ea8a01;
	}

	.swiper-pagination-bullet-active {
		background-color: #ff5733;
	}

	@media (max-width: 720px) {
		.swiper-button-next,
		.swiper-button-prev {
			color: #ff5733;
		}
	}
`;
