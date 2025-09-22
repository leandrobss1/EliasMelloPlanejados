import * as S from './styles';
import { TfiInstagram } from 'react-icons/tfi';
import { TfiFacebook } from 'react-icons/tfi';
import { SiWhatsapp } from 'react-icons/si';
import EliasLogo from '../../assets/img/lg-eliasMelo.png';

export const Footer: React.FC = () => {
	return (
		<S.FooterWrapper>
			<S.FooterWrapperData>
				<S.FooterInnerWrapper>
					<S.FooterData>
						Endereço
						<S.FooterParagraph>
							R. Gerôncio Gonçalves - Nossa Sra. de Fátima S.FooterParagraphatos
							de Minas - MG, 38701-626
						</S.FooterParagraph>
					</S.FooterData>
					<S.FooterData>
						Contato
						<S.FooterParagraph>(34) 99213-2298 Higor Mello</S.FooterParagraph>
						<S.FooterParagraph>(61) 99167-0848 Luan Elias</S.FooterParagraph>
					</S.FooterData>
					<S.FooterData>
						Siga-nos!
						<S.FooterParagraphButton>
							<a
								href='https://www.instagram.com/eliasmellodesign/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
							>
								<TfiInstagram />
							</a>
							<TfiFacebook />
							<a href='https://api.whatsapp.com/send?phone=5561991670848'>
								<SiWhatsapp />
							</a>
						</S.FooterParagraphButton>
					</S.FooterData>
				</S.FooterInnerWrapper>
			</S.FooterWrapperData>
			<S.FooterReserved>
				<S.FooterInnerWrapper>
					<S.FooterReservedPhoto
						src={EliasLogo}
						alt='Elias Logo'
						title='EliasMello InnovationInDesign'
					/>
					<S.FooterParagraph>
						© EliasMello Planejados 2025 . Todos os direitos reservados.
					</S.FooterParagraph>
				</S.FooterInnerWrapper>
			</S.FooterReserved>
		</S.FooterWrapper>
	);
};
