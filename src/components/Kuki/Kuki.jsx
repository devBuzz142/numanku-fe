import * as S from './Kuki.style';
import { useNavigate } from 'react-router-dom';

import { KUKI_IMAGES } from '../../commons/dummy';
import Icon from '../Icon/Icon';
import { useChannelContext } from '../../contexts/ChannelProvider';
import { useAuthContext } from '../../contexts/AuthProvider';

const Kuki = ({ kuki }) => {
  const navigate = useNavigate();
  const { authState } = useAuthContext();

  const handleKukiClick = () => {
    if (kuki.isPrivate && !authState.isMaker) return;

    navigate(`/kuki/${kuki.id}`, { state: kuki });
  };

  return (
    <S.KukiContainer
      left={kuki.x}
      rotate={Math.random() * 180 - 90}
      onClick={handleKukiClick}
    >
      <S.LockBadgeWrapper lock={kuki.isPrivate}>
        <Icon name={'LOCK_FILL'} width={40} height={40} />
      </S.LockBadgeWrapper>
      <S.KukiWrapper
        likeCount={kuki.likeCount}
        outter={KUKI_IMAGES.outter[kuki.outterImageIndex]}
        inner={KUKI_IMAGES.inner[kuki.innerImageIndex]}
      />
    </S.KukiContainer>
  );
};

export default Kuki;
