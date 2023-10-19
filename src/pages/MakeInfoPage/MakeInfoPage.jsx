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

const MakeInfoPage = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    intro: '',
    link: '',
    image: '',
  });
  const [image, setImage] = useState(null);

  const handleInfoChange = (e) => {
    let { id, value } = e.target;
    if (id === 'image') value = e.target.files[0];

    setInfo({
      ...info,
      [id]: value,
    });

    if (id === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(value);
    }
  };

  const handleSubmitClick = () => {
    navigate('/make/design');
  };

  return (
    <Container>
      <h1>MakeInfoPage</h1>
      <form>
        <label htmlFor="intro">intro</label>
        <input type="text" id="intro" onChange={handleInfoChange} />
        <br />
        <label htmlFor="link">link</label>
        <input type="text" id="link" onChange={handleInfoChange} />
        <br />
        <label htmlFor="image">image</label>
        <input type="file" id="image" onChange={handleInfoChange} />
        <br />
      </form>
      {image && <img src={image} alt="preview" />}
      <button type="button" onClick={handleSubmitClick}>
        submit
      </button>
    </Container>
  );
};

export default MakeInfoPage;
