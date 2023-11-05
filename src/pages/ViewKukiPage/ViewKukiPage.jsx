import * as S from './ViewKukiPage.style';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
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
      <S.ContentContainer>방명록 내용</S.ContentContainer>
    </S.ViewKukiPage>
  );
};

export default ViewKukiPage;
