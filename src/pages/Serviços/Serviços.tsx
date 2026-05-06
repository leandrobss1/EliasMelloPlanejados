import React, { useEffect, useState } from 'react';
import * as S from './styles';
import EtImg1 from '../../assets/img/project-bedroom.jpg';
import EtImg2 from '../../assets/img/project-kitchen.jpg';
import EtImg3 from '../../assets/img/project-office.jpg';

import ServiçosEtapas from './ServiçosEtapas';

type Photo = {
  id: number;
  src: string;
  alt?: string;
};

const imagesEtapas: Photo[] = [
  {
    id: 1,
    src: EtImg1,
    alt: 'FirsImage',
  },
  {
    id: 2,
    src: EtImg2,
    alt: 'SecImage',
  },
  {
    id: 3,
    src: EtImg3,
    alt: 'TritImage',
  },
];

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
          <S.ScrollDot $top="10%" $active={scrollProgress >= 10} />
          <S.ScrollDot $top="45%" $active={scrollProgress >= 46} />
          <S.ScrollDot $top="80%" $active={scrollProgress >= 81} />
        </S.ScrollTrack>

        <S.ServTitlle>Nossos Produtos</S.ServTitlle>
        <S.ServParagraph>Conheça alguns de nossos serviços.</S.ServParagraph>

        <S.DesignSection>
          <ServiçosEtapas
            img={imagesEtapas[0].src}
            title="Linha Prime"
            subtitle="Sofisticação & precisão"
            paragraph="Acabamento superior e detalhes que fazem a diferença. O padrão de excelência."
          />
          <ServiçosEtapas
            img={imagesEtapas[1].src}
            title="Linha One"
            subtitle="Luxo sem limite"
            paragraph="Ferragens de grife. Materiais nobres. Projeto sem concessões. Para quem não compara preço."
          />
          <ServiçosEtapas
            img={imagesEtapas[2].src}
            title="Linha Tech"
            subtitle="Inovação invisível"
            paragraph="Tecnologia, autonomia e ferragens inteligentes. Funcionalidade que surpreende."
          />
        </S.DesignSection>
      </S.ServContainer>
    </>
  );
};
