import React from "react";
import * as S from "./styles";

type ProjectCardProps = {
  image: string;
  title: string;
  location: string;
  onClick?: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  location,
  onClick,
}) => {
  return (
    <S.CardContainer onClick={onClick}>
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