import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as S from './ViewCompletePage.style';

import TEMP_KUKI from '../../assets/kuki1.svg';
import ViewMainPage from '../ViewMainPage/ViewMainPage';

const ViewCompletePage = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [redirectToview, setRedirectToView] = useState(false);

  useEffect(() => {
    const onboardingDuration = 5000;

    const timeoutId = setTimeout(() => {
      setShowOnboarding(false);
      setRedirectToView(true);
    }, onboardingDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (redirectToview) {
    return (
      <Routes>
        <Route path="/view" element={<ViewMainPage />} />
      </Routes>
    )
  }

  return (
    <div>
      {showOnboarding && (
      <S.ViewCompletePage>
        <S.HeaderContainer>
          쿠키 선물 완료!
        </S.HeaderContainer>
        <S.KukiContainer image={TEMP_KUKI} />
      </S.ViewCompletePage>
      )}
    </div>
    
  )
}

export default ViewCompletePage;