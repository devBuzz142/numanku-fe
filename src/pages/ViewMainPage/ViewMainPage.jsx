import * as S from './ViewMainPage.style';
import Icon from '../../components/Icon/Icon';
import Kuki from '../../components/Kuki/Kuki';

import TEMP_POSTER from '../../assets/images/temp_poster2.jpeg';
import { TEMP_KUKIES } from '../../commons/dummy';
import { API } from '../../api';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { useAuthContext } from '../../contexts/AuthProvider';

const TEMP_DEFAULT_CHANNEL = 1;

const ViewMainPage = () => {
  const navigate = useNavigate();
  const [kukies, setKukies] = useState(TEMP_KUKIES);
  const { channelState } = useChannelContext();
  const { authDispatch } = useAuthContext();

  // TODO: isPrivate
  const { authState } = useAuthContext();

  useEffect(() => {
    const fetchKukies = async () => {
      const kukies = await API.kuki.getKukiesByChannelId({
        channel_id: channelState.channelId || TEMP_DEFAULT_CHANNEL,
      });

      setKukies(kukies);
    };

    fetchKukies();
  }, []);

  const handleLogoutClick = async () => {
    authDispatch({ type: 'RESET_USER' });
  };

  return (
    <S.ViewMainPage image={TEMP_POSTER}>
      <S.BackVuttonWrapper onClick={handleLogoutClick}>
        <Icon name="BACK_FILL" width="60px" height="60px" />
      </S.BackVuttonWrapper>
      <S.InfoButtonWrapper>
        <S.InfoButton>
          <Icon name="HELP_CIRCLE" width="80px" height="80px" />
        </S.InfoButton>
      </S.InfoButtonWrapper>
      <S.PlusButtonWrapper>
        <S.PlusButton onClick={() => navigate('/design')}>
          <Icon name="ADD_FILL" width="80px" height="80px" />
        </S.PlusButton>
      </S.PlusButtonWrapper>
      <S.KukiContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {kukies.map((kuki, index) => (
          <Kuki key={index} kuki={kuki} />
        ))}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </S.KukiContainer>
    </S.ViewMainPage>
  );
};

export default ViewMainPage;
