import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  button {
    padding: 8px;
    border: 2px solid black;
    background-color: white;
  }
`;

const MakeDesignPage = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/make/qr');
  };

  return (
    <Container>
      <h1>MakeDesignpage</h1>
      <br />
      <button type="submit" onClick={handleSubmitClick}>
        Design Submit
      </button>
    </Container>
  );
};

export default MakeDesignPage;
