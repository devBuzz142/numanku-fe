import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ViewWritePage.style';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

const ViewWritePage = () => {
  const navigate = useNavigate();
  
  return (
    <S.ViewWritePageContainer>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.UndoWrapper>
            <Icon name="UNDO" width={45} height={45} />
          </S.UndoWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.ButtonWrapper>
          <Button type="button" onClick={() => navigate('/view')}>
          선물하기
          </Button>
        </S.ButtonWrapper>
      /</S.MainContainer>
    </S.ViewWritePageContainer>
  );
};

export default ViewWritePage;