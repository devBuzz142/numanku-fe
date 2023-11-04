import * as S from './MakeCompletePage.style';
import Icon from '../../components/Icon/Icon';
import Header from '../../components/Header/Header';
import TEMP_POSTER from '../../assets/images/temp_poster.jpeg';

const MakeCompletePage = () => {
  return (
    <S.MakeCompletePage>
      <S.BackIconWrapper>
        <Icon name="BACK_FILL" width={48} height={48} />
      </S.BackIconWrapper>
      <S.CompleteUIContainer poster={TEMP_POSTER}>
        <Header>완성!</Header>
        <Header>오븐UI예정</Header>
      </S.CompleteUIContainer>
      <S.ButtonContainer>
        <S.Button>방명록 URL 복사</S.Button>
        <S.Button>방명록 공유하기</S.Button>
        <S.Button>방명록 QR코드 다운로드</S.Button>
      </S.ButtonContainer>
    </S.MakeCompletePage>
  );
};

export default MakeCompletePage;
