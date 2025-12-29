import React from "react";
import { useNavigate } from 'react-router-dom';
import * as S from "./styles";

type ProjectCardProps = {
  id: string;
  image: string;
  title: string;
  location: string;
  onClick?: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  location,
}) => {
  const navigate = useNavigate();


  return (
    <S.CardContainer onClick={() => navigate(`/projects/${id}`)}>
      <S.CardImage src={image} alt={title} />

      <S.CardOverlay>
        <S.CardInfo>
          <S.CardTitleInfo>{title}</S.CardTitleInfo>
          <S.CardSpan>{location}</S.CardSpan>
        </S.CardInfo>
      </S.CardOverlay>
    </S.CardContainer>
  );
};

export default ProjectCard;