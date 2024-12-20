import React from 'react';
import * as S from './styles';
import LogoHeader from '../img/bg-header.png';

export const Main: React.FC = () => {
	return (
		<S.MainContainer>
			<S.MainImage src={LogoHeader} alt='background-main' />
		</S.MainContainer>
	);
};
