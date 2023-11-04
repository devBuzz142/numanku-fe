import * as S from './MakeCompletePage.style';
import Header from '../../components/Header/Header';
import TEMP_POSTER from '../../assets/images/temp_poster.jpeg';

const MakeCompletePage = () => {
  return (
    <S.MakeCompletePage>
      <S.CompleteUIContainer poster={TEMP_POSTER}>
        <Header>완성!</Header>
        <Header>오븐UI예정</Header>
      </S.CompleteUIContainer>
      <S.ButtonContainer>
        <S.Button>방명록 URL 복사</S.Button>
        <S.Button>방명록 공유하기</S.Button>
        <S.Button>방명록 QR코드 다운로드</S.Button>
        <S.CodeWrapper>제작진비밀번호 : TEMP</S.CodeWrapper>
      </S.ButtonContainer>
    </S.MakeCompletePage>
  );
};

export default MakeCompletePage;
