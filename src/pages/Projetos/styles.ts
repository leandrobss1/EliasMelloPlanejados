import styled from "styled-components";
import { pageFade } from "../../styles/GlobalStyles";

export const ProjectContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    animation: ${pageFade} 1.5s ease-in-out;
    

`
export const ProjectTitle = styled.h1` 
    padding: 2rem 0 2rem 0;
    font-weight: 500;
    
`

export const ProjectParagraph = styled.p`
    font-size: 1.4rem;
`

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;

  cursor: pointer;
`;


export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  display: block;

  backface-visibility: hidden;
  transform: translateZ(0);
`;


export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  color: #fff;

  h3 {
    font-size: 18px;
    margin: 0;
  }

  span {
    font-size: 14px;
    opacity: 0.85;
  }
`;

export const CardTitleInfo = styled.h3``;

export const CardSpan = styled.span``;  

export const ProjectsGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 2rem;
`;
