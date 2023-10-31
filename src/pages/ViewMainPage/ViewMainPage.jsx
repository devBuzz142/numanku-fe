import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import Modal from '../../components/Tab/Modal';

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
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_END_POINT =
  'http://ec2-51-20-132-150.eu-north-1.compute.amazonaws.com:3030';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_END_POINT + '/kuki/1');
        setData((prevData) => [...prevData, ...response.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  return (
    <Container>
      <h1>ViewMainPage</h1>
      <background type = "background">
        <img src={kuki1} alt="kuki1" width="64px" height="64px"></img>
          <button onClick={openModal}>모달 열기</button>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <h2>모달 내용</h2>
            <p>쿠키 내용 불러오기 fetch 추가</p>
          </Modal>
        <img src={kuki2} alt="kuki2" width="64px" height="64px" />
        <img src={kuki3} alt="kuki3" width="64px" height="64px" />
        {data.map((item) => (
          {item}
        ))}
        {loading && <p>Loading...</p>}
      </background>
      <br />
      <button type="button" onClick={handleDesignClick}>
        Design New Kuki
      </button>
    </Container>
  );
};

export default ViewMainPage;