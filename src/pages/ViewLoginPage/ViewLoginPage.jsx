import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ViewLoginPage.style';

import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import { API } from '../../api/';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { useAuthContext } from '../../contexts/AuthProvider';

const ViewLoginPage = () => {
  const navigate = useNavigate();
  const { channelState } = useChannelContext();
  const { authDispatch } = useAuthContext();

  const [login, setLogin] = useState({
    name: ' ',
    password: ' ',
    makerCode: '',
  });

  const handleLoginChange = (e) => {
    let { id, value } = e.target;

    setLogin({
      ...login,
      [id]: value,
    });
  };

  const handleLoginClick = async () => {
    if (login.name === ' ' || login.password === ' ') {
      alert('이름과 비밀번호를 입력해주세요.');

      return;
    }

    if (login.name.length > 12 || login.password.length > 12) {
      alert('이름과 비밀번호는 최대 12글자까지 입력 가능합니다.');

      return;
    }

    const TEMP_MAKER_CODE = '1234';
    if (login.makerCode) {
      if (login.makerCode.length > 12) {
        alert('제작진 비밀번호는 최대 12글자까지 입력 가능합니다.');

        return;
      }

      if (login.makerCode !== TEMP_MAKER_CODE) {
        alert('제작진 비밀번호가 일치하지 않습니다.');

        return;
      }
    }

    const users = await API.user.getUsers();
    const user = users.find((user) => user.name === login.name);

    if (!user) {
      const newUser = await API.user.createUser({
        name: login.name,
        password: login.password,
        isMaker: channelState.makerCode === login.makerCode,
        channelId: channelState.channelId,
      });

      if (newUser) {
        alert('계정이 생성되었습니다.');

        authDispatch({
          type: 'SET_USER',
          payload: {
            userId: newUser.id,
            name: newUser.name,
            password: newUser.password,
            isMaker: newUser.isMaker,
            channelId: newUser.channelId,
          },
        });

        navigate('/view');

        return;
      } else {
        alert('계정 생성에 실패했습니다.');

        return;
      }
    }

    if (user.password !== login.password) {
      alert('비밀번호가 일치하지 않습니다.');

      return;
    }

    alert('로그인 되었습니다.');

    authDispatch({
      type: 'SET_USER',
      payload: {
        userId: user.id,
        name: user.name,
        password: user.password,
        isMaker: user.isMaker,
        channelId: user.channel_id,
      },
    });

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
            계정 생성 / 로그인
          </Button>
        </S.ButtonWrapper>
        <br />
        <br />
        <S.GuideWrapper>
          <S.Guide>도움말</S.Guide>
          <Icon name="HELP_CIRCLE" width={32} height={32} />
        </S.GuideWrapper>
      </S.MainContainer>
    </S.ViewLoginPageContainer>
  );
};

export default ViewLoginPage;
