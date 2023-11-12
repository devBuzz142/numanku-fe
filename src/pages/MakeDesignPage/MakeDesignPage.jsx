import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';

const MakeDesignPage = () => {
  const [activeColor, handleColorChange] = useColorPalette();

  return (
    <S.MakeDesignPage>
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
            <ColorPalette
              activeColor={activeColor}
              handleColorChange={handleColorChange}
            />
          </S.CollorPalleteWrapper>
          <S.ButtonWrapper>
            <Button width={660}>포장하기</Button>
          </S.ButtonWrapper>
        </S.Controller>
      </S.ControllerContainer>
    </S.MakeDesignPage>
  );
};

export default MakeDesignPage;
