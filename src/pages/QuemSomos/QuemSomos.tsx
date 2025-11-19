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



export default function QuemSomos(){
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
            
            <S.QSParagraph>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</S.QSParagraph>
            <S.QSParagraph>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</S.QSParagraph>
            <S.QSParagraph>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</S.QSParagraph>
        </S.QSContainer>
            
    )
}