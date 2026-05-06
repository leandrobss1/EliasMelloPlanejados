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
  top: 148px;
  width: 2px;
  height: 81%;
  background-color: #f5f1ea;
  z-index: 1;
`;

export const ScrollFill = styled.div<{ $progress: number }>`
  width: 100%;
  height: ${(props) => props.$progress}%;
  background-color: #b49663;
  transition: height 0.2s ease-out;
`;

export const ScrollDot = styled.div<{ $top: string; $active: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: ${(props) => props.$top};
  width: 1.57rem;
  height: 1.57rem;

  background-color: ${(props) => (props.$active ? '#b49663' : '#f5f1ea')};

  border: 2px solid #b49663;
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
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

export const CardEtapas = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  padding: 0;
`;

export const CardImageContainerEtapas = styled.div`
  width: 500px;
  height: 28.12rem;
  margin: 0;
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const CardContentEtapas = styled.div`
  padding: 0;
  gap: 10px;
  box-shadow: 1px 1px 1px #b49663;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 10px #b49663;
    transform: translateY(-3px);
  }
`;

export const CardTitleEtapas = styled.h1`
  margin-bottom: 1rem;
  color: #2c2c2c;
  font-weight: 500;
`;

export const CardSubTitleEtapas = styled.span`
  color: #b49663;
  text-transform: uppercase;
`;

export const CardParagraphEtapas = styled.p`
  width: 100%;
  max-width: 28.25rem;
  margin-top: 2rem;
  color: #2c2c2c;
`;
