import * as S from './Kuki.style';
import KUKI1 from '../../assets/kuki1.svg';
import { useNavigate } from 'react-router-dom';

const Kuki = ({ kuki }) => {
  const navigate = useNavigate();

  return (
    <S.KukiContainer
      left={kuki.left}
      onClick={() => navigate(`/view/kuki/${kuki.id}`)}
    >
      <S.KukiWrapper likeCount={kuki.likeCount}>
        <img src={kuki.image || KUKI1} alt="kuki1" />
      </S.KukiWrapper>
    </S.KukiContainer>
  );
};

export default Kuki;
