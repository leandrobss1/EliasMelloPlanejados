import React from 'react';
import * as S from './styles';
import LogoHeader from '../img/bg-header.png';

export const Main: React.FC = () => {
	return (
		<S.MainContainer>
			<S.ImageWrapper>
				<S.MainImage
					src={LogoHeader}
					alt='background-main'
					className='fade-in'
				/>
				<S.TextOverlay className='slide-in'>
					<S.MainTitle>
						Está em busca de móveis planejados de alto padrão?
					</S.MainTitle>
					<S.MainParagraph>
						Com os nossos móveis planejados, você pode transformar o seu espaço
						em algo <strong>único</strong> e <strong>funcional</strong>!
					</S.MainParagraph>
				</S.TextOverlay>
			</S.ImageWrapper>
		</S.MainContainer>
	);
};
