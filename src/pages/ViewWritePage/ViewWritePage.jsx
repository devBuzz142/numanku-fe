import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ViewWritePage.style';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import kuki1 from '../../assets/kuki1.svg'

const ViewWritePage = () => {
  const navigate = useNavigate();
  
  const [kukiContents, setKukiContents] = useState('');

  const handleKukiContentsChange = (event) => {
    setKukiContents(event.target.value);
  };

  const [isAnonymous, setIsAnonymous] = useState(false);
  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const [isPrivate, setIsPrivate] = useState(false);
  const togglePrivate = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <S.ViewWritePageContainer>
      <S.TopContainer>
        <S.UndoWrapper>
          <Icon name="BACK_FILL" width={45} height={45} />
        </S.UndoWrapper>

      </S.TopContainer>
      <S.KukiContainer>
        <img src={kuki1} alt="kuki1" width="450px" height="450px"></img>
      </S.KukiContainer>
      <S.KukiContentsContainer>
        <Input
          width={600}
          label="방명록 내용"
          type="text"
          id="KukiContents"
          onChange={handleKukiContentsChange}
        />
      </S.KukiContentsContainer>
      <S.CheckBoxContainer>
        <S.AnonymousWrapper>
          <Icon name="CHECKBOX" width={35} height={35} />
          <S.CheckBoxTextWrapper>
            익명
          </S.CheckBoxTextWrapper>
        </S.AnonymousWrapper>
        <Icon name="DIVIDE_LINE" width={5} height={45} />
        <S.PrivateWrapper>
          <Icon name="CHECKBOX" width={35} height={35} />
          <S.CheckBoxTextWrapper>
            비공개
          </S.CheckBoxTextWrapper>
        </S.PrivateWrapper>
      </S.CheckBoxContainer>
      <S.ButtonWrapper>
          <Button type="button" onClick={() => navigate('/view')}>
          선물하기
          </Button>
        </S.ButtonWrapper>
    </S.ViewWritePageContainer>
  );
};

export default ViewWritePage;