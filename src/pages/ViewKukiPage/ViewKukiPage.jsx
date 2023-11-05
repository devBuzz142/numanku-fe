import * as S from './ViewKukiPage.style';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';
import TEMP_KUKI from '../../assets/kuki1.svg';

const ViewKukiPage = () => {
  return (
    <S.ViewKukiPage>
      <S.HeaderContainer>
        <S.BackIconWrapper>
          <Icon name="BACK_FILL" />
        </S.BackIconWrapper>
        <Header fontSize={48}>작성자 이름</Header>
      </S.HeaderContainer>
      <S.KukiContainer image={TEMP_KUKI}></S.KukiContainer>
      <S.ContentContainer>
        <SpeechBubble>
          <S.ContentWrapper>안녕하세요</S.ContentWrapper>
          <S.HeartWrapper>
            <Icon name="HEART_LINE" />
          </S.HeartWrapper>
        </SpeechBubble>
      </S.ContentContainer>
    </S.ViewKukiPage>
  );
};

export default ViewKukiPage;
