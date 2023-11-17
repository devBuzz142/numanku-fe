import * as S from './ViewWritePage.style';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import SpeechBubble from '../../components/SpeechBubble/SpeechBubble';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../api/';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { useAuthContext } from '../../contexts/AuthProvider';
import { KUKI_IMAGES } from '../../commons/dummy';

const ViewWritePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { channelState } = useChannelContext();
  const { authState } = useAuthContext();

  const [kukiContents, setKukiContents] = useState('');

  const handleKukiContentsChange = (event) => {
    setKukiContents(event.target.value);
  };

  const [isAnonymous, setIsAnonymous] = useState(false);
  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const [isPrivate, setIsPrivate] = useState(false);
  const togglePrivate = () => {
    setIsPrivate(!isPrivate);
  };

  const handleSubmitClick = async () => {
    if (kukiContents === '') {
      alert('방명록 내용을 입력해주세요.');
      return;
    }

    const { outter, inner } = location.state;

    const kuki = await API.kuki.createKuki({
      content: kukiContents,
      channel_id: channelState.channelId,
      writer_id: authState.userId,
      outterImageIndex: outter,
      innerImageIndex: inner,
      isPrivate: isPrivate,
      isAnonymous: isAnonymous,
      x: 0,
      likeCount: 0,
    });

    if (!kuki) {
      alert('방명록 작성에 실패했습니다.');

      return;
    }

    navigate('/view');
  };

  return (
    <S.ViewWritePageContainer>
      <S.TopContainer>
        <S.UndoWrapper onClick={() => navigate('/view')}>
          <Icon name="BACK_FILL" width={45} height={45} />
        </S.UndoWrapper>
        <S.NameWrapper>
          <Header fontSize={48}>{isAnonymous ? '익명' : '이름'}</Header>
        </S.NameWrapper>
      </S.TopContainer>
      <S.KukiContainer>
        <S.Kuki outter={KUKI_IMAGES.outter[0]} inner={KUKI_IMAGES.inner[0]} />
        <S.LockBadgeWrapper lock={isPrivate}>
          <Icon name="LOCK_FILL" width={100} height={100} />
        </S.LockBadgeWrapper>
      </S.KukiContainer>
      <S.KukiContentsContainer>
        <S.SpeechBubbleWrapper>
          <SpeechBubble>
            <S.TextareaWrapper>
              <Input
                width={580}
                height={560}
                label="방명록내용"
                type="textarea"
                id="kukiContents"
                onChange={handleKukiContentsChange}
                backgroundColor={'#D9D9D9'}
                noBorder
              />
            </S.TextareaWrapper>
          </SpeechBubble>
        </S.SpeechBubbleWrapper>
      </S.KukiContentsContainer>
      <S.CheckBoxContainer>
        <S.AnonymousWrapper onClick={toggleAnonymous}>
          <S.CheckBox checked={isAnonymous} />
          <S.CheckBoxTextWrapper>익명</S.CheckBoxTextWrapper>
        </S.AnonymousWrapper>
        <Icon name="DIVIDE_LINE" width={5} height={45} />
        <S.PrivateWrapper onClick={togglePrivate}>
          <S.CheckBox checked={isPrivate} />
          <S.CheckBoxTextWrapper>비공개</S.CheckBoxTextWrapper>
        </S.PrivateWrapper>
      </S.CheckBoxContainer>
      <S.ButtonWrapper>
        <Button type="button" onClick={handleSubmitClick}>
          선물하기
        </Button>
      </S.ButtonWrapper>
    </S.ViewWritePageContainer>
  );
};

export default ViewWritePage;
