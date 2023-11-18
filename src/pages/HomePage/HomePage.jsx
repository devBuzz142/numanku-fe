import * as S from './HomePage.style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

import { API } from '../../api';
import LOGO from '../../assets/images/logo2.png';

const HomePage = () => {
  const navigate = useNavigate();

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const res = await API.channel.getChannels();
      setChannels(res);
    };

    fetchChannels();
  }, []);

  return (
    <S.HomePage>
      <S.HeaderContainer>
        <img src={LOGO} alt="logo" width={580} />
        <br />
        <br />
        <br />
        <br />
        <Header>공연 선택하기</Header>
      </S.HeaderContainer>
      <S.ChannelList>
        {channels.map((channel) => (
          <S.ChannelWrapper key={channel.channelId}>
            <Button
              onClick={() => {
                navigate(`/channel/${channel.channelId}`);
              }}
            >
              {channel.name}
            </Button>
          </S.ChannelWrapper>
        ))}
      </S.ChannelList>
    </S.HomePage>
  );
};

export default HomePage;
