import React from 'react'
import * as S from './styles';
import { FooterLogo } from './FooterLogo';

export const FooterBottom: React.FC = () => {
    return(
        <S.BottomContainer>
            <FooterLogo />

            <S.Copy>
                © {new Date().getFullYear()} EliasMelloPlanejados — Todos os direitos reservados.
            </S.Copy>
    </S.BottomContainer>
  );
}