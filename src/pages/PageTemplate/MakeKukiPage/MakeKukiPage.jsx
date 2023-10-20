import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  input {
    background-color: white;
  }

  button {
    border: 2px solid black;
    background-color: white;
  }
`;

const MakeKukiPage = () => {
  const navigate = useNavigate();

  const [kuki, setKuki] = useState({
    content: '',
    design: '',
    name: '',
    open: '',
  });

  const handleKukiChange = (e) => {
    let { id, value } = e.target;

    setKuki({
      ...kuki,
      [id]: value,
    });
  }

  const handleSubmitClick = () => {
    navigate('/view');
  }
  
  return (
    <Container>
      <h1>MakeKukiPage</h1>
      <form>
        <label htmlFor="content">content</label>
        <input type="text" id="content" onChange={handleKukiChange} />
        <br />
        <label htmlFor="design">design</label>
        //여러 초이스 중에서 선택하는 체크박스
        <br />
        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={handleKukiChange} />
        //공란이면 익명으로 or 랜덤으로
        <br />
        <label htmlFor="open">open or not</label>
        //체크박스
      </form>
      <button type="button" onClick={handleSubmitClick}>
        submit
      </button>
    </Container>
  );
};

export default MakeKukiPage;