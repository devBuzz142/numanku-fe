import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';
import KUKI1 from '../../assets/kuki1.svg';
import KUKI2 from '../../assets/kuki2.svg';
import KUKI3 from '../../assets/kuki3.svg';

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
            <S.MenuTabItem selected>쿠키 모양</S.MenuTabItem>
            <S.MenuTabItem>쿠키 그림</S.MenuTabItem>
            <S.MenuTabItem>그림 색상</S.MenuTabItem>
          </S.MenuTab>
          <S.DrawingTab>
            <S.DrawingTabItem selected>
              <img src={KUKI1} alt="쿠키1" />
            </S.DrawingTabItem>
            <S.DrawingTabItem>
              <img src={KUKI2} alt="쿠키2" />
            </S.DrawingTabItem>
            <S.DrawingTabItem>
              <img src={KUKI3} alt="쿠키3" />
            </S.DrawingTabItem>
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
