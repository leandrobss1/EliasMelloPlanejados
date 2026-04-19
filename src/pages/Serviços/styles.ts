import styled from 'styled-components';
import { pageFade } from '../../styles/GlobalStyles';

export const ServContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  animation: ${pageFade} 1.5s ease-in-out;
  padding-bottom: 200px;
`;

export const ScrollTrack = styled.div`
  position: absolute;
  left: 80px;
  top: 180px;
  width: 2px;
  height: 70%;
  background-color: #f5f1ea;
  z-index: 1;
`;

export const ScrollFill = styled.div<{ $progress: number }>`
  width: 100%;
  height: ${(props) => props.$progress}%;
  background-color: #ea8a01;
  transition: height 0.2s ease-out;
`;

export const ScrollDot = styled.div<{ $top: string; $active: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: ${(props) => props.$top};
  width: 1.57rem;
  height: 1.57rem;

  background-color: ${(props) => (props.$active ? '#ea8a01' : '#f5f1ea')};

  border: 2px solid #ea8a01;
  border-radius: 50%;
  z-index: 2;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
`;

export const ServTitle = styled.h3`
  padding: 2rem 0 2rem 0;
  font-weight: 500;
`;

export const ServTitlle = styled.h1`
  margin: 1rem;
`;

export const ServParagraph = styled.h4`
  font-size: 22.4px;
  font-weight: 200;
  max-width: 600px;
  text-align: center;
  margin: 16px;
`;

export const DesignSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CardEtapas = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const CardImageContainerEtapas = styled.div`
  margin: 0px;
  padding: 0px;
`;
export const CardContentEtapas = styled.div``;

export const CardTitleEtapas = styled.h2``;

export const CardParagraphEtapas = styled.p``;
