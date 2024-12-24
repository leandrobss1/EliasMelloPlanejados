// ServiceCard.tsx
import React from 'react';
import * as S from './ServiceCardStyle';

interface ServiceCardProps {
	svg: React.ReactElement;
	title: string;
	paragraph: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ svg, title, paragraph }) => (
	<S.Card>
		<S.CardImageContainer>{svg}</S.CardImageContainer>
		<S.CardContent>
			<S.CardTitle>{title}</S.CardTitle>
			<S.CardParagraph>{paragraph}</S.CardParagraph>
		</S.CardContent>
	</S.Card>
);

export default ServiceCard;
