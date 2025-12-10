import styled from "styled-components";
import { pageFade } from "../../styles/GlobalStyles";



export const QSContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding-top: 2rem;
	position: relative;
	overflow: hidden;
	background-color: whitesmoke;
	animation: ${pageFade} 1.5s ease-in-out;

`;

export const QSImagesRow = styled.div`
	width: 100%;
  	max-width: 800px;
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
	width: 100%;
	text-align: center;
	padding: 1rem 0 0 1rem;

	@media (max-width: 930px) and (min-width: 768px) {
		font-size: 1.5rem;
		width: 80%;
	}

	@media (max-width: 750px) and (min-width: 430px) {
		font-size: 1.3rem;
		width: 80%;
	}

	@media (max-width: 425px) {
		font-size: 1.3rem;
		width: 50%;
	}

	@media (max-width: 320px) {
		text-align: center;
		font-size: 1.1rem;
		width: 90%;
	}
`

export const QSParagraph = styled.div`
	font-size: 1.4rem;
	padding: 2rem;
	width: 100%;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 1.5rem;
		width: 90%;
	}

	@media (max-width: 425px) {
		font-size: 0.9rem;
		width: 100%;
	}

	@media (max-width: 320px) {
		font-size: 0.9rem;
		width: 100%;
	}

	strong {
		color: #ea8a01;		
	}

`

export const QSSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 320px) {
		width: 100%;
		padding: 2rem 0.5rem;
	}

`;

export const QSRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column;
	flex-direction: ${({ reverse }) => (reverse ? "column" : "column-reverse")};
    text-align: center;
  }
`;



export const QSImage = styled.img`
  width: 45%;
  border-radius: 0.3rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);

  @media (max-width: 900px) {
    width: 50%
  }

  @media (max-width: 425px) {
    width: 70%
  }
`;

export const QText = styled.div`
  width: 47%;
  border: solid 2px;
  border-image: linear-gradient(45deg, #ea8a01, #000000) 1;

   @media (max-width: 900px) {
    width: 70%;	
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

