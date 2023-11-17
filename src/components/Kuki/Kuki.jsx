import * as S from './Kuki.style';
import { useNavigate } from 'react-router-dom';

import { KUKI_IMAGES } from '../../commons/dummy';

const Kuki = ({ kuki }) => {
  const navigate = useNavigate();

  return (
    <S.KukiContainer
      left={kuki.x}
      onClick={() => navigate(`/view/kuki/${kuki.id}`)}
    >
      <S.KukiWrapper
        likeCount={kuki.likeCount}
        outter={KUKI_IMAGES.outter[kuki.outterImageIndex]}
        inner={KUKI_IMAGES.inner[kuki.innerImageIndex]}
      />
    </S.KukiContainer>
  );
};

export default Kuki;
