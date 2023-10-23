import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Tab, { useTab } from '../../components/Tab/Tab';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  button {
    padding: 8px;
    border: 2px solid black;
    background-color: white;
  }
`;

const KukiCanvas = styled.canvas`
  width: 296px;
  height: 296px;

  margin-left: 32px;

  background-color: white;
`;

const PALLETE = [
  '#000000',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
];

const PalleteContainer = styled.div`
  display: flex;
`;

const PalleteItem = styled.div`
  margin: 16px;

  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
`;

const MakeDesignPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useTab();

  const canvasRef = useRef(null);
  const [canvasCtx, setCanvasCtx] = useState(null);
  const [isPainting, setIsPainting] = useState(false);

  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setCanvasCtx(ctx);
  }, []);

  useEffect(() => {
    if (canvasCtx) {
      canvasCtx.strokeStyle = PALLETE[colorIdx];
    }
  }, [canvasCtx, colorIdx]);

  const handleDraw = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (!isPainting) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(offsetX, offsetY);
    } else {
      canvasCtx.lineTo(offsetX, offsetY);
      canvasCtx.stroke();
    }
  };

  const handleSubmitClick = () => {
    navigate('/make/qr');
  };

  // 사용자애게 guide comment가 꽤 필요할 듯.

  return (
    <Container>
      <h1>MakeDesignPage</h1>
      <br />
      <KukiCanvas
        ref={canvasRef}
        onMouseDown={() => setIsPainting(true)}
        onMouseMove={handleDraw}
        onMouseUp={() => setIsPainting(false)}
        onMouseLeave={() => setIsPainting(false)}
      />
      <br />
      <PalleteContainer>
        {PALLETE.map((color, idx) => (
          <PalleteItem
            key={`pallete-${idx}`}
            color={color}
            onClick={() => setColorIdx(idx)}
          />
        ))}
      </PalleteContainer>
      <br />
      <Tab
        items={['Outter', 'Outter_Color', 'Inner']}
        selected={selected}
        setSelected={setSelected}
      />
      <br />
      <button type="submit" onClick={handleSubmitClick}>
        Design Submit
      </button>
    </Container>
  );
};

export default MakeDesignPage;
