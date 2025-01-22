import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes` 
  from { opacity: 0; } 
  to { opacity: 1; } 
`;

export const slideIn = keyframes` 
  from { transform: translateY(20px); opacity: 0; } 
  to { transform: translateY(0); opacity: 1; }
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	animation: ${fadeIn} 1.5s ease-in-out;
	z-index: 0;
`;

export const MainImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const TextOverlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	color: white;
	padding: 20px;
	border-radius: 10px;
	text-align: center;
	margin-bottom: 13rem;
	width: 70%;
	animation: ${slideIn} 1.5s ease-in-out;
	z-index: 2;

	@media (max-width: 768px) {
		width: 90%;
		margin-bottom: 6rem;
	}
`;

export const MainTitle = styled.h1`
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
`;

export const MainParagraph = styled.p`
	font-size: 1.3rem;
	padding: 2rem;
	width: 65%;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 1.5rem;
		width: 90%;
	}

	strong {
		@media (max-width: 930px) and (min-width: 50px) {
			color: #ea8a01;
		}
	}
`;
