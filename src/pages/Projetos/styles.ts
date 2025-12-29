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

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  span {
    font-size: 14px;
    opacity: 0.85;
  }
`;

export const CardTitleInfo = styled.h1`
  text-align: center;
  font-weight: 500;  
`;

export const CardSpan = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
`;  

export const ProjectsGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 2rem;
`;

export const GalleryContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  animation: ${pageFade} 0.8s ease-in-out;
`;

export const GalleryHeader = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.4rem;
    color: #777;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;

  border-radius: 3px;
  background-color: #f2f2f2;

  transition: transform 0.35s ease, filter 0.35s ease;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.05);
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${pageFade} 0.3s ease-in-out;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

export const LightboxImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  display: block;
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;

  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: #FF3838;
  }
`;