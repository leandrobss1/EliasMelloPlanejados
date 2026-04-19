import React, { useEffect, useState } from 'react';
import * as S from './styles';
import EtImg1 from '../../assets/img/etapas-img.png';
import ServiçosEtapas from './ServiçosEtapas';

type Photo = {
  id: number;
  src: string;
  alt?: string;
};

const imagesEtapas: Photo[] = [{ id: 1, src: EtImg1, alt: 'First Image' }];

export const Serviços: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <S.ServContainer>
        <S.ScrollTrack>
          <S.ScrollFill $progress={scrollProgress} />
          <S.ScrollDot $top="15%" $active={scrollProgress >= 16} />
        </S.ScrollTrack>

        <S.ServTitlle>Nossos Produtos</S.ServTitlle>
        <S.ServParagraph>Conheça alguns de nossos serviços.</S.ServParagraph>

        <S.DesignSection>
          <ServiçosEtapas
            img={imagesEtapas[0].src}
            title="Design com Propósito"
            paragraph="Transformamos ideias em experiências visuais memoráveis."
          />
        </S.DesignSection>
      </S.ServContainer>
    </>
  );
};
