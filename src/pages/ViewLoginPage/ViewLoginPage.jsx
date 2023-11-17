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

  const handleLoginClick = () => {
    if (login.name === ' ' || login.password === ' ') {
      alert('이름과 비밀번호를 입력해주세요.');

      return;
    }

    if (login.name.length > 12 || login.password.length > 12) {
      alert('이름과 비밀번호는 최대 12글자까지 입력 가능합니다.');

      return;
    }

    navigate('/view');
  };

  return (
    <S.ViewLoginPageContainer>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <Header>로그인</Header>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.Form>
          <Input
            width={580}
            label="이름"
            type="text"
            id="name"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
            placeholder={'최대 12글자까지 입력 가능합니다.'}
          />
          <Input
            width={580}
            label="비밀번호"
            type="text"
            id="password"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
            placeholder={'최대 12글자까지 입력 가능합니다.'}
          />
          <Input
            width={580}
            label="제작진 비밀번호"
            type="text"
            id="makerCode"
            onChange={handleLoginChange}
            backgroundColor={'#D9D9D9'}
            noBorder
            labelAlign="center"
            placeholder={'공연 제작진일 경우에만 입력해주세요.'}
          />
        </S.Form>
        <S.ButtonWrapper>
          <Button type="button" onClick={handleLoginClick}>
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
