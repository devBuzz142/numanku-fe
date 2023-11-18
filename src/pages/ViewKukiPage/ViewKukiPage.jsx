import * as S from './ViewKukiPage.style';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';

import { KUKI_IMAGES } from '../../commons/dummy';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../api';

const ViewKukiPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const kuki = location.state;

  const [writer, setWriter] = useState('');

  useEffect(() => {
    const fetchWriter = async () => {
      const res = await API.user.getUserById({ user_id: kuki.writer_id });
      const writer = res[0];

      setWriter(writer);
    };

    fetchWriter();
  }, []);

  console.log(kuki);

  return (
    <S.ViewKukiPage>
      <S.HeaderContainer>
        <S.BackIconWrapper onClick={() => navigate('/view')}>
          <Icon name="BACK_FILL" />
        </S.BackIconWrapper>
        <Header fontSize={48}>{kuki.isAnonymous ? '익명' : writer.name}</Header>
      </S.HeaderContainer>
      <S.KukiContainer
        outter={KUKI_IMAGES.outter[kuki.outterImageIndex]}
        inner={KUKI_IMAGES.inner[kuki.innerImageIndex]}
      ></S.KukiContainer>
      <S.ContentContainer>
        <SpeechBubble>
          <S.ContentWrapper>{kuki.content}</S.ContentWrapper>
          {/* <S.HeartWrapper>
            <S.BadgeWrapper>
              <Badge>100</Badge>
            </S.BadgeWrapper>
            <Icon name="HEART_LINE" />
          </S.HeartWrapper> */}
        </SpeechBubble>
      </S.ContentContainer>
    </S.ViewKukiPage>
  );
};

export default ViewKukiPage;
