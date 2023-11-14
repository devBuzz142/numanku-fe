import * as S from './ViewMainPage.style';
import TEMP_POSTER from '../../assets/images/temp_poster2.jpeg';
import Icon from '../../components/Icon/Icon';
import { useNavigate } from 'react-router-dom';

const ViewMainPage = () => {
  const navigate = useNavigate();

  return (
    <S.ViewMainPage image={TEMP_POSTER}>
      <S.PlusButtonWrapper>
        <S.PlusButton onClick={() => navigate('/view/write')}>
          <Icon name="ADD_FILL" width="80px" height="80px" />
        </S.PlusButton>
      </S.PlusButtonWrapper>
    </S.ViewMainPage>
  );
};

export default ViewMainPage;
