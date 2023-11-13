import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';
import KUKI1 from '../../assets/kuki1.svg';
import KUKI2 from '../../assets/kuki2.svg';
import KUKI3 from '../../assets/kuki3.svg';
import { useEffect, useRef, useState } from 'react';

const MakeDesignPage = () => {
  const [activeColor, handleColorChange] = useColorPalette();
  const [activeTool, setActiveTool] = useState(0); // 0: pen, 1: eraser
  const [activeTab, setActiveTab] = useState({
    menuTab: 0,
    outterTab: 0,
    innerTab: 0,
    innerColorTab: 0,
  });

  const canvasRef = useRef(null);
  const [canvasCtx, setCanvasCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const [tempImg, setTempImg] = useState(null);

  useEffect(() => {
    const initCtx = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      setCanvasCtx(ctx);
    };

    initCtx();

    return () => {
      setCanvasCtx(null);
    };
  }, [canvasRef]);

  const hanleMenuTabChange = (name, index) =>
    setActiveTab({
      ...activeTab,
      [name]: index,
    });

  const handleToolChange = (index) => setActiveTool(index);

  const draw = (e) => {
    // mouse position
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    // drawing
    if (!isDrawing) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(mouseX, mouseY);
    } else {
      canvasCtx.lineTo(mouseX, mouseY);
      canvasCtx.stroke();
    }
  };

  const handleDrawStop = () => {
    setIsDrawing(false);
    setTempImg(canvasRef.current.toDataURL());
  };

  return (
    <S.MakeDesignPage>
      <Header>자유롭게 그려주세요!</Header>
      <S.CanvasWrapper>
        <canvas
          id="canvas"
          width="680"
          height="680"
          ref={canvasRef}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        ></canvas>
      </S.CanvasWrapper>
      <S.ControllerContainer>
        <S.ToolWrapper>
          <S.Tool
            selected={0 === activeTool}
            onClick={() => handleToolChange(0)}
          >
            펜
          </S.Tool>
          <S.Tool
            selected={1 === activeTool}
            onClick={() => handleToolChange(1)}
          >
            지우개
          </S.Tool>
        </S.ToolWrapper>
        <S.Controller>
          <S.MenuTab>
            <S.MenuTabItem
              selected={0 === activeTab.menuTab}
              onClick={() => hanleMenuTabChange('menuTab', 0)}
            >
              쿠키 모양
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={1 === activeTab.menuTab}
              onClick={() => hanleMenuTabChange('menuTab', 1)}
            >
              쿠키 그림
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={2 === activeTab.menuTab}
              onClick={() => hanleMenuTabChange('menuTab', 2)}
            >
              그림 색상
            </S.MenuTabItem>
          </S.MenuTab>
          <S.DrawingTab>
            <S.DrawingTabItem
              selected={0 === activeTab.outterTab}
              onClick={() => hanleMenuTabChange('outterTab', 0)}
            >
              <img src={tempImg} alt="쿠키1" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={1 === activeTab.outterTab}
              onClick={() => hanleMenuTabChange('outterTab', 1)}
            >
              <img src={KUKI2} alt="쿠키2" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={2 === activeTab.outterTab}
              onClick={() => hanleMenuTabChange('outterTab', 2)}
            >
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
