import React from 'react';
import * as S from './styles';
import LogoIcon from '../img/lg-elias.png';

export const Header: React.FC = () => {
	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>
					<S.StyledIcon
						src={LogoIcon}
						alt='EliasMelloLogo'
						title='EliasMello Inovation&Design'
					/>
				</S.HeaderTitle>

				<S.ButtonsWrapper>
					<S.Button>Home</S.Button>
					<S.Button>Projetos</S.Button>
					<S.Button>Serviços</S.Button>
					<S.OrçButton>Orçamento</S.OrçButton>
				</S.ButtonsWrapper>
			</S.Wrapper>
		</S.StyledHeader>
	);
};
