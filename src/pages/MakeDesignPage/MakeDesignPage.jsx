import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';
import { useEffect, useMemo, useRef, useState } from 'react';

const MakeDesignPage = () => {
  const [activeColor, handleColorChange] = useColorPalette();
  // const [activeTool, setActiveTool] = useState(0); // 0: pen, 1: eraser
  const [activeTab, setActiveTab] = useState({
    menu: 0,
    outter: 0,
    inner: 0,
    innerColor: 0,
  });

  const canvasOutterRef0 = useRef(null);
  const canvasOutterRef1 = useRef(null);
  const canvasOutterRef2 = useRef(null);
  const canvasInnerRef0 = useRef(null);
  const canvasInnerRef1 = useRef(null);
  const canvasInnerRef2 = useRef(null);
  const canvasRef = useMemo(
    () => ({
      outter: [canvasOutterRef0, canvasOutterRef1, canvasOutterRef2],
      inner: [canvasInnerRef0, canvasInnerRef1, canvasInnerRef2],
    }),
    [],
  );

  const [canvasCtx, setCanvasCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const [drawingImg, setDrawingImg] = useState({
    outter: [null, null, null],
    inner: [null, null, null],
    innerColor: [null, null, null],
  });

  useEffect(() => {
    const initCtx = () => {
      const activeMenu = activeTab.menu === 0 ? 'outter' : 'inner';
      const canvas = canvasRef[activeMenu][activeTab[activeMenu]].current;
      const ctx = canvas.getContext('2d');
      setCanvasCtx(ctx);
    };

    initCtx();

    return () => {
      setCanvasCtx(null);
    };
  }, [canvasRef, activeTab.menu, activeTab.outter, activeTab.inner]);

  const handleMenuTabChange = (name, index) => {
    setActiveTab({
      ...activeTab,
      [name]: index,
    });
  };

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

  const erase = () => {
    canvasCtx.clearRect(0, 0, 680, 680);

    const activeMenu = activeTab.menu === 0 ? 'outter' : 'inner';

    setDrawingImg({
      ...drawingImg,
      [activeMenu]: drawingImg[activeMenu].map((img, idx) =>
        idx === activeTab[activeMenu]
          ? canvasRef[activeMenu][activeTab[activeMenu]].current.toDataURL()
          : img,
      ),
    });
  };

  const handleDrawStop = () => {
    setIsDrawing(false);
    const activeMenu = activeTab.menu === 0 ? 'outter' : 'inner';

    setDrawingImg({
      ...drawingImg,
      [activeMenu]: drawingImg[activeMenu].map((img, idx) =>
        idx === activeTab[activeMenu]
          ? canvasRef[activeMenu][activeTab[activeMenu]].current.toDataURL()
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
            display:
              activeTab.menu === 0 && activeTab.outter === 0 ? 'block' : 'none',
          }}
          id="canvas-outter-0"
          width="680"
          height="680"
          ref={canvasOutterRef0}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display:
              activeTab.menu === 0 && activeTab.outter === 1 ? 'block' : 'none',
          }}
          id="canvas-outter-1"
          width="680"
          height="680"
          ref={canvasOutterRef1}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display:
              activeTab.menu === 0 && activeTab.outter === 2 ? 'block' : 'none',
          }}
          id="canvas-outter-2"
          width="680"
          height="680"
          ref={canvasOutterRef2}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display:
              activeTab.menu === 1 && activeTab.inner === 0 ? 'block' : 'none',
          }}
          id="canvas-inner-0"
          width="680"
          height="680"
          ref={canvasInnerRef0}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display:
              activeTab.menu === 1 && activeTab.inner === 1 ? 'block' : 'none',
          }}
          id="canvas-inner-1"
          width="680"
          height="680"
          ref={canvasInnerRef1}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
        <canvas
          style={{
            display:
              activeTab.menu === 1 && activeTab.inner === 2 ? 'block' : 'none',
          }}
          id="canvas-inner-2"
          width="680"
          height="680"
          ref={canvasInnerRef2}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => handleDrawStop()}
          onMouseMove={draw}
        />
      </S.CanvasWrapper>
      <S.ControllerContainer>
        <S.ToolWrapper>
          <S.Tool onClick={() => erase()}>지우기</S.Tool>
        </S.ToolWrapper>
        <S.Controller>
          <S.MenuTab>
            <S.MenuTabItem
              selected={0 === activeTab.menu}
              onClick={() => handleMenuTabChange('menu', 0)}
            >
              쿠키 모양
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={1 === activeTab.menu}
              onClick={() => handleMenuTabChange('menu', 1)}
            >
              쿠키 그림
            </S.MenuTabItem>
            <S.MenuTabItem
              selected={2 === activeTab.menu}
              onClick={() => handleMenuTabChange('menu', 2)}
            >
              그림 색상
            </S.MenuTabItem>
          </S.MenuTab>
          <S.DrawingTab
            style={{
              display: activeTab.menu === 0 ? 'flex' : 'none',
            }}
          >
            <S.DrawingTabItem
              selected={0 === activeTab.outter}
              onClick={() => handleMenuTabChange('outter', 0)}
            >
              <img src={drawingImg.outter[0]} alt="쿠키모양1" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={1 === activeTab.outter}
              onClick={() => handleMenuTabChange('outter', 1)}
            >
              <img src={drawingImg.outter[1]} alt="쿠키모양2" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={2 === activeTab.outter}
              onClick={() => handleMenuTabChange('outter', 2)}
            >
              <img src={drawingImg.outter[2]} alt="쿠키모양3" />
            </S.DrawingTabItem>
          </S.DrawingTab>
          <S.DrawingTab
            style={{
              display: activeTab.menu === 1 ? 'flex' : 'none',
            }}
          >
            <S.DrawingTabItem
              selected={0 === activeTab.inner}
              onClick={() => handleMenuTabChange('inner', 0)}
            >
              <img src={drawingImg.inner[0]} alt="쿠키그림1" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={1 === activeTab.inner}
              onClick={() => handleMenuTabChange('inner', 1)}
            >
              <img src={drawingImg.inner[1]} alt="쿠키그림2" />
            </S.DrawingTabItem>
            <S.DrawingTabItem
              selected={2 === activeTab.inner}
              onClick={() => handleMenuTabChange('inner', 2)}
            >
              <img src={drawingImg.inner[2]} alt="쿠키그림3" />
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
