import * as S from './styles';
import Commets1 from '../../assets/img/com-1.png';
import Commets2 from '../../assets/img/com-2.png';
import Commets3 from '../../assets/img/com-3.png';
import Commets4 from '../../assets/img/com-4.png';
import Commets5 from '../../assets/img/com-5.png';
import Commets6 from '../../assets/img/com-6.png';

export const Google: React.FC = () => {
	return (
		<S.GoogleWrapper>
			<S.GoogleTitle>Avaliações e Recomendações</S.GoogleTitle>
			<S.GoogleWrapperContainer>
				<S.GoogleComments
					src={Commets1}
					alt='first-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets2}
					alt='second-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets3}
					alt='first-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets4}
					alt='first-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets5}
					alt='first-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets6}
					alt='first-commit'
					title='google-comment'
				/>
			</S.GoogleWrapperContainer>
			
		</S.GoogleWrapper>
	);
};

