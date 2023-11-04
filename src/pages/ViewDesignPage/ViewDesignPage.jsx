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

const ViewDesignPage = () => {
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
      <h1>ViewDesignPage</h1>
      <form>
        <label htmlFor="content">content</label>
        <input type="text" id="content" onChange={handleKukiChange} />
        <br />

        <label htmlFor="design">design</label>
        <select onChange={(e) => handleKukiChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />

        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={handleKukiChange} />
        <input type="text" id="content" onChange={handleKukiChange} />
        <br />

        <label htmlFor="open">public or private</label>
        <select onChange={(e) => handleKukiChange(e)}>
          <option value="public">공개</option>
          <option value="private">비공개</option>
        </select>
      </form>
      <button type="button" onClick={handleSubmitClick}>
        submit
      </button>
    </Container>
  );
};

export default ViewDesignPage;