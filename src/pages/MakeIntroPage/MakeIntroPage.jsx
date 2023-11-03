import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import * as S from './MakeIntroPage.style';

const MakeIntroPage = () => {
  const navigate = useNavigate();

  return (
    <S.MakeIntroPagerContaienr>
      <S.LogoConatiner>
        <Logo height={418} link="/make" />
      </S.LogoConatiner>
      <S.MainContainer>
        <S.ButtonWrapper>
          <Button
            type="button"
            width={550}
            height={100}
            onClick={() => navigate('/make/info')}
          >
            시작하기
          </Button>
        </S.ButtonWrapper>
      </S.MainContainer>
    </S.MakeIntroPagerContaienr>
  );
};

export default MakeIntroPage;
