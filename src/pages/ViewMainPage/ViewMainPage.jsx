import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  input {
    background-color: white;
  }

  button {
    border: 2px solid black;
    background-color: white;
  }
`;

const ViewMainPage = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/view/${kukiID}')
  }
  
  const handleDesignClick = () => {
    navigate('/view/design');
  }

  return (
    <Container>
      <h1>ViewPage</h1>
      <form>
        <button type="button" onClick={handleViewClick('1')}>kuki1</button>
        <button type="button" onClick={handleViewClick('2')}>kuki2</button>
        <button type="button" onClick={handleViewClick('3')}>kuki3</button>
        <br />
        <button type="button" onClick={handleViewClick('4')}>kuki4</button>
        <button type="button" onClick={handleViewClick('5')}>kuki5</button>
      </form>
      <button type="button" onClick={handleDesignClick}>
        Design New Kuki
      </button>
    </Container>
  );
};

export default ViewMainPage;