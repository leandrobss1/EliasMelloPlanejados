import * as S from './styles';
import Commets1 from '../../assets/img/com-1.png';
import Commets2 from '../../assets/img/com-2.png';
import Commets3 from '../../assets/img/com-3.png';
import Commets4 from '../../assets/img/com-4.png';

export const Google: React.FC = () => {
	return (
		<S.GoogleWrapper>
			<S.GoogleTitle>Andam falando por ai...</S.GoogleTitle>
			<S.GoogleWrapperContainer>
				<S.GoogleComments
					src={Commets1}
					alt='first-commit'
					title='google-comment'
				/>
				<S.GoogleComments
					src={Commets2}
					alt='first-commit'
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
			</S.GoogleWrapperContainer>
		</S.GoogleWrapper>
	);
};
