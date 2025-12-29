import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/project';
import * as S from './styles';

export const ProjetoGaleria: React.FC = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <>
      <S.GalleryContainer>
        <S.GalleryHeader>
          <S.CardTitleInfo>{project.title}</S.CardTitleInfo>
          <S.CardSpan>{project.location}</S.CardSpan>
        </S.GalleryHeader>

        <S.GalleryGrid>
          {project.images.map((img, index) => (
            <S.GalleryImage
              key={index}
              src={img}
              alt={`${project.title} ${index + 1}`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </S.GalleryGrid>
      </S.GalleryContainer>

      {activeImage && (
        <S.LightboxOverlay onClick={() => setActiveImage(null)}>
          <S.LightboxContent onClick={(e) => e.stopPropagation()}>
            <S.LightboxClose onClick={() => setActiveImage(null)}>
              ✕
            </S.LightboxClose>

            <S.LightboxImage src={activeImage} alt="Imagem ampliada" />
          </S.LightboxContent>
        </S.LightboxOverlay>
      )}
    </>
  );
};
