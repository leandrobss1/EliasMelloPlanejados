import styled from "styled-components";
import bgImage from '../../assets/img/bg-wood.png';
import { pageFade } from "../../styles/GlobalStyles";


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
	background-image: url(${bgImage});
  	background-size: cover;
  	background-position: center;
  	background-repeat: no-repeat;

	animation: ${pageFade} 1.5s ease-in-out;


`;

export const QSImagesRow = styled.div`
	width: 100%;
  	max-width: 1000px;
  	padding: 1rem;
  	display: grid;	
  	grid-template-columns: repeat(3, auto); 
  	gap: 1.2rem;

	justify-items: center;
	align-items: center;


  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, auto); 
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto); 
  }
`

export const QSPhoto = styled.img`
  	width: 100%;
  	height: auto;
  	object-fit: cover;
  	border-radius: 0.10rem;
  	box-shadow: 0 4px 14px rgba(0,0,0,0.1);
`;

export const QSTitle = styled.div`
	font-size: 2rem;
	width: 50%;
	text-align: center;
	padding-bottom: 1rem;

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
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 1.5rem;
		width: 90%;
	}

	strong {
		color: #ea8a01;
		
	}

`
