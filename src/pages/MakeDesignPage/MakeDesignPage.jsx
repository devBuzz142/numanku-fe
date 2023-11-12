import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const MakeDesignPage = () => {
  return (
    <S.MakeDesignPage>
      <S.HeaderWrapper>
        <Header width={368} height={284} color={'rgba(78, 65, 59, 0.40)'}>
          <div>자유롭게</div>
          <div>그려주세요!</div>
        </Header>
      </S.HeaderWrapper>
      <S.ControllerContainer>
        <S.ToolWrapper>
          <S.Tool>펜</S.Tool>
          <S.Tool>지우개</S.Tool>
        </S.ToolWrapper>
        <S.Controller>
          <S.MenuTab>
            <div>쿠키 모양</div>
            <div>쿠키 그림</div>
            <div>그림 색상</div>
          </S.MenuTab>
          <S.DrawingTab>
            <div>쿠키 그림</div>
            <div>쿠키 그림</div>
            <div>쿠키 그림</div>
          </S.DrawingTab>
          <S.CollorPalleteWrapper>
            <div>ColorPalette</div>
            <div>ColorPalette</div>
          </S.CollorPalleteWrapper>
          <S.ButtonWrapper>
            <Button>포장하기</Button>
          </S.ButtonWrapper>{' '}
        </S.Controller>
      </S.ControllerContainer>
    </S.MakeDesignPage>
  );
};

export default MakeDesignPage;
