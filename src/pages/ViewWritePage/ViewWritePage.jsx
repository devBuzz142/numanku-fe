import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ViewWritePage.style';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

const ViewWritePage = () => {
  const navigate = useNavigate();
  
  const [write, setWrite] = useState({
    name: ' ',
    content: ' ',
  });

  const handleWriteChange = (e) => {
    let {id, value} = e.target;
    setWrite({
      ...write,
      [id]: value,
    })
  };
  
  return (
    <S.ViewWritePageContainer>
      <S.MainContainer>
        <S.UndoWrapper>
          <Icon name="UNDO" width={45} height={45} />
        </S.UndoWrapper>
        <S.KukiImageWrapper>

        </S.KukiImageWrapper>
        <S.Form>

        </S.Form>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button type="button" onClick={() => navigate('/view')}>
          선물하기
        </Button>
      </S.ButtonWrapper>
    </S.ViewWritePageContainer>
  );
};

export default ViewWritePage;