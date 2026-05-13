import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ProjectCard from './ProjetoCard';
import { projects as staticProjects } from '../../data/project';

type Project = {
  id: string;
  title: string;
  location: string;
  coverImage: string;
  images: string[];
};

export const Projetos: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = () => {
      const saved = localStorage.getItem('projects');

      const dynamicProjects: Project[] = saved ? JSON.parse(saved) : [];

      setProjects([...staticProjects, ...dynamicProjects]);
    };

    loadProjects();

    window.addEventListener('storage', loadProjects);

    return () => {
      window.removeEventListener('storage', loadProjects);
    };
  }, []);

  return (
    <>
      <S.ProjectContainer>
        <S.ProjectTitle>Conheça nossos projetos</S.ProjectTitle>

        <S.ProjectParagraph>
          Veja como nossos projetos elevam a estética e a praticidade de
          qualquer espaço.
        </S.ProjectParagraph>
      </S.ProjectContainer>

      <S.ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.coverImage}
            title={project.title}
            location={project.location}
          />
        ))}
      </S.ProjectsGrid>
    </>
  );
};

export default Projetos;
