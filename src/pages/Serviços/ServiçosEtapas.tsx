import { forwardRef } from 'react';
import * as S from './styles';

interface ServiçosEtapasProps {
  img: string;
  title: string;
  subtitle?: string;
  paragraph: string;
}

export const ServiçosEtapas = forwardRef<HTMLDivElement, ServiçosEtapasProps>(
  ({ img, title, paragraph, subtitle }, ref) => (
    <S.CardEtapas ref={ref}>
      <S.CardImageContainerEtapas>
        <img
          src={img}
          alt={title}
          style={{ width: '100%', maxWidth: '500px', display: 'block' }}
        />
      </S.CardImageContainerEtapas>
      <S.CardContentEtapas>
        <S.CardTitleEtapas>{title}</S.CardTitleEtapas>
        <S.CardSubTitleEtapas>{subtitle}</S.CardSubTitleEtapas>
        <S.CardParagraphEtapas>{paragraph}</S.CardParagraphEtapas>
      </S.CardContentEtapas>
    </S.CardEtapas>
  )
);

export default ServiçosEtapas;
