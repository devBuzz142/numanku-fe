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

const ViewMainPage = () => {
  const navigate = useNavigate();
  const [kukies, setKukies] = useState(TEMP_KUKIES);
  const { channelState } = useChannelContext();
  const { authDispatch } = useAuthContext();

  useEffect(() => {
    const fetchKukies = async () => {
      const kukies = await API.kuki.getKukiesByChannelId({
        channel_id: channelState.channelId,
      });

      setKukies(
        kukies.map((kuki) => ({
          ...kuki,
          y:
            Math.random() > 0.5
              ? Math.random() * 15 + 10
              : -10 - Math.random() * 15,
        })),
      );
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
      {/* <S.InfoButtonWrapper>
        <S.InfoButton>
          <Icon name="HELP_CIRCLE" width="80px" height="80px" />
        </S.InfoButton>
      </S.InfoButtonWrapper> */}
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
        {Array.from(Array(kukies.length / 2), (v, i) => [
          kukies[i * 2],
          kukies[i * 2 + 1],
        ]).map((kukies, i) => (
          <S.KukiWrapper1 key={i}>
            <S.KukiWrapper2 key={kukies[0].id}>
              <Kuki key={kukies[0].id} kuki={kukies[0]} />
            </S.KukiWrapper2>
            <S.KukiWrapper2 key={kukies[1].id}>
              <Kuki key={kukies[1].id} kuki={kukies[1]} />
            </S.KukiWrapper2>
          </S.KukiWrapper1>
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
