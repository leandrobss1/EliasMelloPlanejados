import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: #131010;
	width: 100%;
	height: auto;
`;

export const StyledIcon = styled.img`
	width: 7.5rem;
	height: auto;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 3rem;
	height: auto;
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
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
`;

export const OrçButton = styled.button`
	border: none;
	height: 40px;
	padding: 0 1rem;
	color: white;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
	background-color: orange;
	position: relative;

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
`;
export const Button = styled.button`
	border: none;
	height: 40px;
	padding: 0 1rem;
	color: white;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
	background-color: #131010;
	position: relative;

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
`;
