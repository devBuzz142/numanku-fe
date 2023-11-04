import * as S from './MakeCompletePage.style';
import Icon from '../../components/Icon/Icon';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const MakeCompletePage = () => {
  return (
    <S.MakeCompletePage>
      <S.BackIconWrapper>
        <Icon name="BACK_FILL" width={48} height={48} />
      </S.BackIconWrapper>
      <S.CompleteUIContainer>
        <Header>완성!</Header>
        <Header>오븐UI예정</Header>
      </S.CompleteUIContainer>
      <S.ButtonContainer>
        <Button>방명록 URL 복사</Button>
        <Button>방명록 공유하기</Button>
        <Button>방명록 QR코드 다운로드</Button>
      </S.ButtonContainer>
    </S.MakeCompletePage>
  );
};

export default MakeCompletePage;
