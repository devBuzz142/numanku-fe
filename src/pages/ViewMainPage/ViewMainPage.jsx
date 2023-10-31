import { React, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import Modal from './ViewModalPage'

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
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

//   var count = 2;
// window.onscroll = function() {
// 	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
// 		var toAdd = document.createElement("div");
// 		toAdd.classList.add("box");
// 		toAdd.textContent = '${++count}번째 블록'
// 		document.querySelector('section').appendChild(toAdd);
// }
  
  return (
    <Container>
      <h1>ViewMainPage</h1>
      <background type = "background">
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <img src={kuki1} alt="kuki1" width="64px" height="64px">
            {/* <Link to="/kuki1" onClick={() => openModal()}></Link> */}
          </img>
        </Modal>
        <img src={kuki2} alt="kuki2" width="64px" height="64px" />
        <img src={kuki3} alt="kuki3" width="64px" height="64px" />
      </background>
      <br />
      <button type="button" onClick={handleDesignClick}>
        Design New Kuki
      </button>
    </Container>
  );
};

export default ViewMainPage;