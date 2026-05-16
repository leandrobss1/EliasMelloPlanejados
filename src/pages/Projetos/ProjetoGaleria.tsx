import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects as staticProjects } from '../../data/project';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import * as S from './styles';

type Project = {
  id: string;
  title: string;
  location: string;
  coverImage: string;
  images: string[];
};

export const ProjetoGaleria: React.FC = () => {
  const { id } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('projects');

    const dynamicProjects: Project[] = saved ? JSON.parse(saved) : [];

    const allProjects = [...staticProjects, ...dynamicProjects];

    const found = allProjects.find((p) => p.id === id);

    setProject(found || null);
  }, [id]);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % project.images.length);
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
              <IoIosArrowBack />
            </S.PassImageLeft>

            <S.PassImageRight onClick={handleNext}>
              <IoIosArrowForward />
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
