import React from 'react';
import * as S from './styles';
import ProjectCard from './ProjetoCard';
import { projects } from '../../data/project';


export const Projetos: React.FC = () => {
  return (
    <>
      <S.ProjectContainer>
        <S.ProjectTitle>Conheça nossos projetos</S.ProjectTitle>
        <S.ProjectParagraph>
          Veja como nossos projetos elevam a estética e a praticidade de qualquer espaço.
        </S.ProjectParagraph>
      </S.ProjectContainer>


      <S.ProjectsGrid>
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          image={project.coverImage}
          title={project.title}
          location={project.location}
        />
      ))}
      </S.ProjectsGrid>
    </>
  );
};

