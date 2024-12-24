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
`;

export const MainImage = styled.img`
	width: 100%;
	height: auto;
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
`;

export const MainTitle = styled.h1`
	font-size: 2rem;
	width: 50%;
`;

export const MainParagraph = styled.p`
	font-size: 1.3rem;
	padding: 2rem;
	width: 65%;
`;
