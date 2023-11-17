import * as S from './ViewMainPage.style';
import Icon from '../../components/Icon/Icon';
import Kuki from '../../components/Kuki/Kuki';

import TEMP_POSTER from '../../assets/images/temp_poster2.jpeg';
import { TEMP_KUKIES } from '../../commons/dummy';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { useAuthContext } from '../../contexts/AuthProvider';

const ViewMainPage = () => {
  const navigate = useNavigate();
  const [kukies, setKukies] = useState(TEMP_KUKIES);
  const { channelState } = useChannelContext();
  const { authState } = useAuthContext();
  console.log(authState);

  return (
    <S.ViewMainPage image={TEMP_POSTER}>
      <S.InfoButtonWrapper>
        <S.InfoButton>
          <Icon name="HELP_CIRCLE" width="80px" height="80px" />
        </S.InfoButton>
      </S.InfoButtonWrapper>
      <S.PlusButtonWrapper>
        <S.PlusButton onClick={() => navigate('/view/design')}>
          <Icon name="ADD_FILL" width="80px" height="80px" />
        </S.PlusButton>
      </S.PlusButtonWrapper>
      <S.KukiContainer>
        {kukies.map((kuki, index) => (
          <Kuki key={index} kuki={kuki} />
        ))}
      </S.KukiContainer>
    </S.ViewMainPage>
  );
};

export default ViewMainPage;
