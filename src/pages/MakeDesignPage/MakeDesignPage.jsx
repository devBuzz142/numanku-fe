import * as S from './MakeDesignPage.style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ColorPalette, {
  useColorPalette,
} from '../../components/ColorPalette/ColorPalette';
import { useEffect, useMemo, useRef, useState } from 'react';

const COLORS = [
  [0, 0, 0], // black
  [255, 0, 0], // red
  [255, 165, 0], // orange
  [255, 255, 0], // yellow
  [0, 128, 0], // green
  [0, 0, 255], // blue
  [165, 42, 42], // brown
  [128, 0, 128], // purple
];

const MakeDesignPage = () => {
  const [activeColor, handleColorChange] = useColorPalette();
  const [activePen, setActivePen] = useState(0);
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
      ctx.lineWidth = 16;

      setCanvasCtx(ctx);
    };

    initCtx();

    return () => {
      setCanvasCtx(null);
    };
  }, [canvasRef, activeTab.menu, activeTab.outter, activeTab.inner]);

  useEffect(() => {
    if (!canvasCtx) return;

    canvasCtx.strokeStyle = `rgba(${COLORS[activeColor].join(',')}, 0.85)`; // 색상
    console.log(canvasCtx.strokeStyle);
  }, [canvasCtx, activeColor]);

  const handleMenuTabChange = (name, index) => {
    setActiveTab({
      ...activeTab,
      [name]: index,
    });
  };

  // const drawMouse = (e) => {
  //   // mouse position
  //   const mouseX = e.nativeEvent.offsetX;
  //   const mouseY = e.nativeEvent.offsetY;
  //   // drawing
  //   if (!isDrawing) {
  //     canvasCtx.beginPath();
  //     canvasCtx.moveTo(mouseX, mouseY);
  //   } else {
  //     canvasCtx.lineTo(mouseX, mouseY);
  //     canvasCtx.stroke();
  //   }
  // };

  const drawTouch = (e) => {
    if (!isDrawing) return;

    // touch position
    const mouseX = e.touches[0].clientX;
    const mouseY = e.touches[0].clientY;

    const rect = e.target.getBoundingClientRect();
    const x = Math.round(
      ((mouseX - rect.left) / (rect.right - rect.left)) * e.target.width,
    );
    const y = Math.round(
      ((mouseY - rect.top) / (rect.bottom - rect.top)) * e.target.height,
    );

    // drawing
    if (!isDrawing) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
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

    canvasCtx.beginPath();

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

  const handlePenClick = (index) => {
    setActivePen(index);

    if (index === 0) {
      canvasCtx.lineWidth = 16;
    } else if (index === 1) {
      canvasCtx.lineWidth = 10;
    } else {
      canvasCtx.lineWidth = 6;
    }
  };

  return (
    <S.MakeDesignPage>
      <Header>자유롭게 그려주세요!</Header>
      <S.CanvasWrapper
        image={
          drawingImg[activeTab.menu == 0 ? 'inner' : 'outter'][
            activeTab.menu == 0 ? activeTab.inner : activeTab.outter
          ]
        }
      >
        <canvas
          style={{
            display:
              activeTab.menu === 0 && activeTab.outter === 0 ? 'block' : 'none',
          }}
          id="canvas-outter-0"
          width="680"
          height="680"
          ref={canvasOutterRef0}
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
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
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
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
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
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
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
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
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
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
          onTouchStart={() => setIsDrawing(true)}
          onTouchEnd={() => handleDrawStop()}
          onTouchMove={drawTouch}
        />
      </S.CanvasWrapper>
      <S.ControllerContainer>
        <S.ToolWrapper>
          <S.Tool
            selected={0 == activePen}
            onClick={() => handlePenClick(0)}
            penWidth={16}
          />
          <S.Tool
            selected={1 == activePen}
            onClick={() => handlePenClick(1)}
            penWidth={12}
          />
          <S.Tool
            selected={2 == activePen}
            onClick={() => handlePenClick(2)}
            penWidth={6}
          />
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
            {/* <S.MenuTabItem
              selected={2 === activeTab.menu}
              onClick={() => handleMenuTabChange('menu', 2)}
            >
              그림 색상
            </S.MenuTabItem> */}
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
            <Button width={660}>오븐에 넣기</Button>
          </S.ButtonWrapper>
        </S.Controller>
      </S.ControllerContainer>
    </S.MakeDesignPage>
  );
};

export default MakeDesignPage;
