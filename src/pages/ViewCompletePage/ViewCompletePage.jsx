import React, { useEffect } from 'react';
import * as S from './ViewCompletePage.style';

import { useNavigate } from 'react-router-dom';

import { TEMP_KUKIES } from '../../commons/dummy';

const ViewCompletePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/view');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <S.ViewCompletePage>
      <S.HeaderContainer>쿠키 선물 완료!</S.HeaderContainer>
      <S.KukiContainer>kuki</S.KukiContainer>
    </S.ViewCompletePage>
  );
};

export default ViewCompletePage;
