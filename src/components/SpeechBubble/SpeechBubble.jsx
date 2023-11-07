import * as S from './SpeechBubble.style';

const SpeechBubble = ({ children, ...props }) => {
  return <S.SpeechBubble {...props}>{children}</S.SpeechBubble>;
};

export default SpeechBubble;
