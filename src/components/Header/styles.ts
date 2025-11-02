import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: #131010;
	width: 100%;
	height: auto;
	overflow: hidden;
`;

export const StyledIcon = styled.img`
	width: 7.5rem;
	height: auto;

	@media (max-width: 768px) {
		width: 5rem;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 3rem;
	height: auto;

	@media (max-width: 768px) {
		padding: 0 1.5rem;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0 1rem;
	}
`;

export const HeaderTitle = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 1.6rem;
	font-weight: 400;
	padding: 0.5rem;

	img {
		margin-right: 10px;
	}

	@media (max-width: 768px) {
		font-size: 1.4rem;
	}

	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 0.4rem;

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
`;

export const OrçButton = styled.button`
	display: flex;
  	align-items: center;
  	justify-content: center;
	border: none;
	height: 40px;
	padding: 0 1rem;
	color: white;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
	background-color: orange;
	position: relative;
	text-decoration: none;

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		background-color: #ea8a01;
		left: 0;
		bottom: 0;
		transition: width 0.4s ease-in-out;
	}

	&:hover {
		background-color: #ea6a02;
		color: black;
	}

	@media (max-width: 768px) {
		height: 35px;
		font-size: 0.9rem;
	}

	@media (max-width: 480px) {
		width: 100%;
		height: 45px;
	}
`;

export const Button = styled.button`
	display: flex;
 	align-items: center;
  	justify-content: center;
	border: none;
	height: 40px;
	padding: 0 1rem;
	color: white;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
	background-color: #131010;
	position: relative;
	text-decoration: none;

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		background-color: orange;
		left: 0;
		bottom: 0;
		transition: width 0.4s ease-in-out;
	}

	&:hover {
		color: orange;
	}

	&:hover::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		height: 35px;
		font-size: 0.9rem;
	}

	@media (max-width: 480px) {
		width: 100%;
		height: 45px;
	}
`;

export const HamburgerIcon = styled.div`
	display: none;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 30px;
	height: 25px;
	cursor: pointer;
	transition: transform 0.3s ease;
	position: relative;
	z-index: 20;

	div {
		width: 25px;
		height: 3px;
		background-color: #ea6a02;
		border-radius: 5px;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	&.active div:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	&.active div:nth-child(2) {
		opacity: 0;
	}

	&.active div:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 768px) {
		display: flex;
		position: absolute;
		right: 1.5rem;
	}

	@media (max-width: 480px) {
		top: 23px;
		right: 1rem;
	}
`;

export const Menu = styled.div<{ isMenuOpen: boolean }>`
	display: flex;
	gap: 1rem;
	z-index: 10;
	position: relative;
	color: white;

	@media (max-width: 768px) {
		display: ${(props: { isMenuOpen: boolean }) =>
			props.isMenuOpen ? 'flex' : 'none'};
		flex-direction: column;
		position: absolute;
		top: 70px;
		right: 0;
		background-color: #131010;
		width: 20%;
		padding: 1rem;
		align-items: center;
		gap: 1.5rem;
		transition: all 0.3s ease-in-out;
		z-index: 10;
	}

	@media (max-width: 669px) and (min-width: 479px) {
		top: 60px;
		width: 30%;
	}

	@media (max-width: 479px) and (min-width: 300px) {
		top: 60px;
		width: 53%;
	}

	/* @media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		position: relative;
		top: 0;
		right: 0;
		background-color: transparent;
		width: auto;
		padding: 0;
		gap: 2rem;
	} */
`;

export const MenuButton = styled.button`
	border: none;
	height: 40px;
	padding: 0 1rem;
	color: white;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
	background-color: #131010;
	position: relative;
	z-index: 10;

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		background-color: orange;
		left: 0;
		bottom: 0;
		transition: width 0.4s ease-in-out;
	}

	&.active {
		background-color: #ea6a02;
		color: black;
	}

	&:hover {
		color: orange;
	}

	&:hover::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		height: 35px;
		font-size: 0.9rem;
	}

	@media (max-width: 480px) {
		width: 100%;
		height: 45px;
	}
`;
