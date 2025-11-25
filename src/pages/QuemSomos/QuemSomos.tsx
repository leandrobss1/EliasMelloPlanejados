import React from 'react'
import * as S from './styles';
import phImg1 from '../../assets/img/elias-melo-1.jpg';
import phImg2 from '../../assets/img/elias-melo-2.jpg';

type Photo = {
    id: number,
    src: string,
    alt?: string
}

const imagesElias: Photo[] = [
    
    { id: 1, src: phImg1, alt: 'First Image' },
    { id: 2, src: phImg2, alt: 'Second Image'}
   
]


export const QuemSomos: React.FC = () => {

    const text1 = `Somos referência em móveis planejados feitos sob medida para valorizar cada detalhe da sua casa ou empresa. Trabalhamos com soluções modernas, funcionais e com excelente custo-benefício.`;

    const text2 = `Utilizamos materiais de alta durabilidade e tecnologia avançada para entregar móveis com acabamento impecável. Cada projeto é desenvolvido por profissionais qualificados, unindo criatividade e técnica.`;

    return (
        <S.QSContainer>
            
            <S.QSSection>

                <S.QSRow>
                    <S.QSImage 
                        src={imagesElias[0].src} 
                        alt="Projeto Elias Mello 1"
                        loading="lazy"
                    />

                    <S.QText>
                        <S.QSTitle>
                            <strong>Elias Mello Innovation in Design</strong>
                        </S.QSTitle>
                        <S.QSParagraph>{text1}</S.QSParagraph>
                    </S.QText>
                </S.QSRow>

                <S.QSRow reverse>
                    <S.QText>
                        <S.QSParagraph>{text2}</S.QSParagraph>
                    </S.QText>

                    <S.QSImage 
                        src={imagesElias[1].src} 
                        alt="Projeto Elias Mello 2"
                        loading="lazy"
                    />
                </S.QSRow>

            </S.QSSection>

        </S.QSContainer>
    );
};


