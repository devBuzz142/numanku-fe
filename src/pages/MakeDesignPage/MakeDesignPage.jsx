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

const MakeDesignPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useTab();

  const canvasRef = useRef(null);
  const [canvasCtx, setCanvasCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setCanvasCtx(ctx);
  }, []);

  const handleSubmitClick = () => {
    navigate('/make/qr');
  };

  // 사용자애게 guide comment가 꽤 필요할 듯.

  return (
    <Container>
      <h1>MakeDesignPage</h1>
      <br />
      <KukiCanvas ref={canvasRef} />
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
