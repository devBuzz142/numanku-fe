import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import * as S from './MakeKukiTypePage.style';

const MakeKukiTypePage = () => {
  const navigate = useNavigate();

  return (
    <S.MakeKukiTypePage>
      <S.HeaderContainer>
        <S.BackIconWrapper>
          <Icon name="BACK_FILL" width={48} height={48} />
        </S.BackIconWrapper>
        <S.TextWrapper>
          <Header color="#FEF8E6">선택해주세요!</Header>
        </S.TextWrapper>
      </S.HeaderContainer>
      <S.MainContainer>
        <Button>템플릿 사용하기</Button>
        <Button onClick={() => navigate('/make/design')}>직접 만들기</Button>
      </S.MainContainer>
    </S.MakeKukiTypePage>
  );
};

export default MakeKukiTypePage;
