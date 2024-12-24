import React from 'react';
import * as S from './ServiceCardStyle';
import ServiceCard from './ServiceCard';
import { TbTruckDelivery } from 'react-icons/tb';
import { PiSealCheckBold } from 'react-icons/pi';
import { GiDrill } from 'react-icons/gi';
import { TfiRulerAlt } from 'react-icons/tfi';

const Card: React.FC = () => (
	<S.CardContainer id='services-section'>
		<S.CardsTitle>
			Nosso compromisso é entregar móveis planejados que transformam sonhos em{' '}
			<strong>realidade</strong>, garantindo qualidade e satisfação
		</S.CardsTitle>
		<S.CardsWrapper>
			<ServiceCard
				svg={<TbTruckDelivery />}
				title='Entrega rápida'
				paragraph='Comprometidos com a sua satisfação, oferecemos um prazo de entrega eficiente para que você desfrutar dos seus móveis novos o quanto antes.'
			/>
			<ServiceCard
				svg={<PiSealCheckBold />}
				title='Selo de Qualidade'
				paragraph='Nossos móveis planejados são fabricados com os melhores materiais e acabamentos, garantindo durabilidade e elegância em cada peça.'
			/>
			<ServiceCard
				svg={<GiDrill />}
				title='Montagem'
				paragraph='Nossa equipe especializada cuida de cada detalhe da montagem, assegurando que seus móveis fiquem perfeitos e prontos para uso.'
			/>
			<ServiceCard
				svg={<TfiRulerAlt />}
				title='Na medida'
				paragraph='Desenhamos e fabricamos móveis sob medida, para que cada canto da sua casa seja aproveitado de forma inteligente e personalizada.'
			/>
		</S.CardsWrapper>
	</S.CardContainer>
);

export default Card;
