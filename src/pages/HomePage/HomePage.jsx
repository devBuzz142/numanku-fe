import * as S from './HomePage.style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

import { API } from '../../api';
import LOGO from '../../assets/images/logo2.png';
import { useChannelContext } from '../../contexts/ChannelProvider';

const HomePage = () => {
  const navigate = useNavigate();

  const [channels, setChannels] = useState([]);
  const { channelDispatch } = useChannelContext();

  useEffect(() => {
    const fetchChannels = async () => {
      const res = await API.channel.getChannels();
      setChannels(res);
    };

    fetchChannels();
  }, []);

  const handleChannelClick = (channelId) => {
    const channel = channels.find((ch) => ch.id === channelId);
    channelDispatch({
      type: 'SET_CHANNEL',
      payload: {
        channelId: channel.id,
        name: channel.name,
        info: channel.info,
        link: channel.link,
        password: channel.password,
        posterImage: channel.posterImage,
        outterImages: [
          channel.outterImage0,
          channel.outterImage1,
          channel.outterImage2,
        ],
        innerImages: [
          channel.innerImage0,
          channel.innerImage1,
          channel.innerImage2,
        ],
      },
    });

    navigate('/login');
  };

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
          <S.ChannelWrapper key={channel.id}>
            <Button onClick={() => handleChannelClick(channel.id)}>
              {channel.name}
            </Button>
          </S.ChannelWrapper>
        ))}
      </S.ChannelList>
    </S.HomePage>
  );
};

export default HomePage;
