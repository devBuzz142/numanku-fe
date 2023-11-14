import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';
import { useEffect, useMemo, useRef, useState } from 'react';
import KUKI1 from '../../assets/kuki1.svg';

const MakeDesignPage = () => {
  const [activeColor, handleColorChange] = useColorPalette();
  const [activeTool, setActiveTool] = useState(0); // 0: pen, 1: eraser
  const [activeTab, setActiveTab] = useState({
    menu: 0,
    outter: 0,
    inner: 0,
    innerColor: 0,
  });

  const canvasOutterRef0 = useRef(null);
  const canvasOutterRef1 = useRef(null);
  const canvasOutterRef2 = useRef(null);
  const canvasRef = useMemo(
    () => ({
      outter: [canvasOutterRef0, canvasOutterRef1, canvasOutterRef2],
    }),
    [],
  );

  const [canvasCtx, setCanvasCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const [drawingImg, setDraingImg] = useState({
    outter: [null, null, null],
    inner: [null, null, null],
    innerColor: [null, null, null],
  });

  useEffect(() => {
    const initCtx = () => {
      const canvas = canvasRef.outter[activeTab.outter].current;
      const ctx = canvas.getContext('2d');
      setCanvasCtx(ctx);
    };

    initCtx();

    return () => {
      setCanvasCtx(null);
    };
  }, [canvasRef, activeTab.menu, activeTab.outter, activeTab.inner]);

  const hanleMenuTabChange = (name, index) => {
    setActiveTab({
      ...activeTab,
      [name]: index,
    });
  };

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
    setDraingImg({
      ...drawingImg,
      outter: drawingImg.outter.map((img, idx) =>
        idx === activeTab.outter
          ? canvasRef.outter[activeTab.outter].current.toDataURL()
          : img,
      ),
    });
  };

  return (
    <S.MakeDesignPage>
      <Header>자유롭게 그려주세요!</Header>
      <S.CanvasWrapper>
        <canvas
          style={{
            display: activeTab.outter === 0 ? 'block' : 'none',
          }}
          id="canvas0"
          width="680"
          height="680"
          ref={canvasOutterRef0}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display: activeTab.outter === 1 ? 'block' : 'none',
          }}
          id="canvas1"
          width="680"
          height="680"
          ref={canvasOutterRef1}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display: activeTab.outter === 2 ? 'block' : 'none',
          }}
          id="canvas2"
          width="680"
          height="680"
          ref={canvasOutterRef2}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
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
              selected={0 === activeTab.menu}
              onClick={() => hanleMenuTabChange('menu', 0)}
            >
              쿠키 모양
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={1 === activeTab.menu}
              onClick={() => hanleMenuTabChange('menu', 1)}
            >
              쿠키 그림
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={2 === activeTab.menu}
              onClick={() => hanleMenuTabChange('menu', 2)}
            >
              그림 색상
            </S.MenuTabItem>
          </S.MenuTab>
          <S.DrawingTab>
            <S.DrawingTabItem
              selected={0 === activeTab.outter}
              onClick={() => hanleMenuTabChange('outter', 0)}
            >
              <img src={drawingImg.outter[0]} alt="쿠키1" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={1 === activeTab.outter}
              onClick={() => hanleMenuTabChange('outter', 1)}
            >
              <img src={drawingImg.outter[1]} alt="쿠키2" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={2 === activeTab.outter}
              onClick={() => hanleMenuTabChange('outter', 2)}
            >
              <img src={drawingImg.outter[2]} alt="쿠키3" />
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
