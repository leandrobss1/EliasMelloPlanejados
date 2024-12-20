import React from 'react';
import * as S from './styles';
import LogoIcon from '../img/logo-elias.png';

export const Header: React.FC = () => {
	return (
		<S.StyledHeader>
			<S.StyledIcon src={LogoIcon} alt='EliasMelloLogo' />
		</S.StyledHeader>
	);
};
