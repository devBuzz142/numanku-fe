import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ViewLoginPage.style';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

const ViewLoginPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    name: ' ',
    password: ' ',
    makerCode: ' ',
  });

  const handleLoginChange = (e) => {
    let { id, value } = e.target;
    setLogin({
      ...login,
      [id]: value,
    });
  };

  return (
    <S.ViewLoginPageContainer>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <Header width={286}>로그인</Header>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.Form>
          <Input
            width={550}
            label="이름"
            type="text"
            id="name"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
          />
          <Input
            width={550}
            label="비밀번호"
            type="text"
            id="password"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
          />
          <Input
            width={550}
            label="제작진 비밀번호"
            type="text"
            id="makerCode"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
          />
        </S.Form>
        <S.ButtonWrapper>
          <Button type="button" onClick={() => navigate('/view/write')}>
            계정 생성
          </Button>
        </S.ButtonWrapper>
        <S.GuideWrapper>
          <S.Guide>도움말</S.Guide>
          <Icon name="HELP_CIRCLE" width={32} height={32} />
        </S.GuideWrapper>
      </S.MainContainer>
    </S.ViewLoginPageContainer>
  );
};

export default ViewLoginPage;
