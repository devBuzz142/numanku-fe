import React, { useEffect } from 'react';
import * as S from './ViewCompletePage.style';
import { useNavigate } from 'react-router-dom';

import TEMP_KUKI from '../../assets/kuki1.svg';

const ViewCompletePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/view');
    }, 3000);
    return () => {
      clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <S.ViewCompletePage>
      <S.HeaderContainer>
        쿠키 선물 완료!
      </S.HeaderContainer>
      <S.KukiContainer image={TEMP_KUKI} />
    </S.ViewCompletePage>
  )
}

export default ViewCompletePage;