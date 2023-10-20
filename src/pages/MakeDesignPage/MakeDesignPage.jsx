import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Tab, { useTab } from '../../components/Tab/Tab';

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

  const [selected, setSelected] = useTab();

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
