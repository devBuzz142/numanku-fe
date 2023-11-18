import React, { useEffect } from 'react';
import * as S from './ViewCompletePage.style';

import { useLocation, useNavigate } from 'react-router-dom';

import { KUKI_IMAGES } from '../../commons/dummy';

const ViewCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { outter, inner } = location.state;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <S.ViewCompletePage>
      <S.HeaderContainer>쿠키 선물 완료!</S.HeaderContainer>
      <S.KukiContainer
        outter={KUKI_IMAGES.outter[outter]}
        inner={KUKI_IMAGES.inner[inner]}
      ></S.KukiContainer>
    </S.ViewCompletePage>
  );
};

export default ViewCompletePage;
