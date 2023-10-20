import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  button {
    padding: 8px;
    border: 2px solid black;
    background-color: white;
  }
`;

const KukiCanvas = styled.div`
  width: 296px;
  height: 296px;

  margin-left: 32px;

  background-color: white;
`;

const MakeDesignPage = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/make/qr');
  };

  // 사용자애게 guide comment가 꽤 필요할 듯.

  return (
    <Container>
      <h1>MakeDesignPage</h1>
      <br />
      <KukiCanvas />
      <br />
      <div>
        <div>Outter Tab</div>
        <div>Outter_Color Tab</div>
        <div>Inner Tab</div>
      </div>
      <br />
      <button type="submit" onClick={handleSubmitClick}>
        Design Submit
      </button>
    </Container>
  );
};

export default MakeDesignPage;
