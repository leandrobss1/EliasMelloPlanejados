import styled from 'styled-components';

export const FooterWrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: #fffdf0;
`;

export const FooterParagraph = styled.p`
	font-size: 0.88rem;
	font-weight: 400;
	font-family: 'Montserrat', serif;
	max-width: 18.75rem;
	padding-top: 1rem;
`;

export const FooterParagraphButton = styled.p`
	display: flex;
	border: none;
	cursor: pointer;
	align-items: center;
	padding: 1rem;
	color: black;
	transition: 0.1s;

	:hover {
		color: #ea8a01;
	}
`;

export const FooterWrapperData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
`;

export const FooterInnerWrapper = styled.div`
	width: 100%;
	max-width: 75rem;
	border-bottom: 1px solid black;
	padding-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 13rem;
`;

export const FooterData = styled.h1`
	font-size: 1.2rem;
	font-weight: 600;
	font-family: 'Montserrat', serif;
	text-align: center;
	margin-bottom: 1rem;
`;

export const FooterReserved = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;

	white-space: nowrap;
`;

export const FooterReservedPhoto = styled.img`
	width: 25rem;
	height: auto;
	margin-right: 10rem;
`;
