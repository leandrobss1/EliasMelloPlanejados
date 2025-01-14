import React, { useState } from 'react';
import * as S from './styles';
import LogoIcon from '../../assets/img/lg-elias.png';

export const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>
					<S.StyledIcon
						src={LogoIcon}
						alt='EliasMelloLogo'
						title='EliasMello InnovationInDesign'
					/>
				</S.HeaderTitle>

				<S.HamburgerIcon
					onClick={toggleMenu}
					className={isMenuOpen ? 'active' : ''}
				>
					<div />
					<div />
					<div />
				</S.HamburgerIcon>

				<S.Menu isMenuOpen={isMenuOpen}>
					<S.Button>Home</S.Button>
					<S.Button>Projetos</S.Button>
					<S.Button>Serviços</S.Button>
					<S.OrçButton>Orçamento</S.OrçButton>
				</S.Menu>
			</S.Wrapper>
		</S.StyledHeader>
	);
};
