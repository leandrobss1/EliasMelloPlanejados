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



export const QuemSomos: React.FC = () =>{
    return (
        <S.QSContainer >
            <S.QSTitle><strong>Somos a EliasMelloInnovationinDesign</strong></S.QSTitle>
            
            <S.QSImagesRow>
                {imagesElias.map((Foto) => (
                <S.QSPhoto 
                key={Foto.id}
                src={Foto.src}
                alt={Foto.alt}
                />
            ))}
            </S.QSImagesRow>           
            
            <S.QSParagraph>Somos referência em móveis planejados feitos sob medida para valorizar cada detalhe da sua casa ou empresa. Trabalhamos com soluções modernas, funcionais e com excelente custo-benefício, garantindo ambientes bonitos, organizados e totalmente personalizados.</S.QSParagraph>

            <S.QSParagraph>Utilizamos materiais de alta durabilidade, ferragens de primeira linha e tecnologia avançada para entregar móveis com acabamento impecável. Cada projeto é desenvolvido por profissionais qualificados, que unem criatividade e técnica para garantir o melhor resultado.</S.QSParagraph>

            <S.QSParagraph>Do planejamento à instalação, oferecemos um atendimento rápido, transparente e voltado à sua satisfação. Criamos espaços inteligentes, práticos e elegantes, sempre com foco em superar expectativas. Realize seu sonho de ter móveis planejados com quem entende do assunto.</S.QSParagraph>
        </S.QSContainer>
            
    )
}

