import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useHistory } from "react-router-dom";

import kuki1 from '../../assets/kuki1.svg'
import kuki2 from '../../assets/kuki2.svg'
import kuki3 from '../../assets/kuki3.svg'

const Container = styled.div`
  input {
    background-color: white;
  }

  button {
    border: 2px solid black;
    background-color: white;
  }

  background {
    width: 300px;
    height: 700px;
    border: 4px solid black;
    background-color: white;
  }
`;

const ViewMainPage = () => {
  const navigate = useNavigate();
  
  const handleDesignClick = () => {
    navigate('/view/design');
  }

  const handleKukiClick = () => {
    history.push('/kuki1');
  }

  const history = useHistory();

  return (
    <Container>
      <h1>ViewMainPage</h1>
      <background type = "background">
        <img src={kuki1} alt="kuki1" width="64px" height="64px" />
        <button type="button" onClick={handleKukiClick}>viewKuki</button>
        <img src={kuki2} alt="kuki1" width="64px" height="64px" />
        <img src={kuki3} alt="kuki1" width="64px" height="64px" />
      </background>
      <br />
      <button type="button" onClick={handleDesignClick}>
        Design New Kuki
      </button>
    </Container>
  );
};

export default ViewMainPage;