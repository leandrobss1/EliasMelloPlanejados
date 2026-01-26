import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/project';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import * as S from './styles';

export const ProjetoGaleria: React.FC = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  const handleNext = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex + 1) % project.images.length
    );
  };

  const handlePrev = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex - 1 + project.images.length) % project.images.length
    );
  };

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
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </S.GalleryGrid>
      </S.GalleryContainer>

      {activeIndex !== null && (
        <S.LightboxOverlay onClick={() => setActiveIndex(null)}>
          <S.LightboxContent onClick={(e) => e.stopPropagation()}>
            <S.LightboxClose onClick={() => setActiveIndex(null)}>
              ✕
            </S.LightboxClose>

            <S.PassImageLeft onClick={handlePrev}>
              <FaArrowCircleLeft />
            </S.PassImageLeft>

            <S.PassImageRight onClick={handleNext}>
              <FaArrowCircleRight />
            </S.PassImageRight>

            <S.LightboxImage
              src={project.images[activeIndex]}
              alt="Imagem ampliada"
            />
          </S.LightboxContent>
        </S.LightboxOverlay>
      )}
    </>
  );
};
