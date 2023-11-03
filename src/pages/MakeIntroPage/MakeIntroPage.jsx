import Logo from '../../components/Logo/Logo';
import * as S from './MakeIntroPage.style';

const MakeIntroPage = () => {
  return (
    <S.MakeIntroPagerContaienr>
      <S.LogoConatiner>
        <Logo height={418} link="/make" />
      </S.LogoConatiner>
      <S.MainContainer>
        <S.ButtonWrapper>
          <button type="button">시작하기</button>
        </S.ButtonWrapper>
      </S.MainContainer>
    </S.MakeIntroPagerContaienr>
  );
};

export default MakeIntroPage;
