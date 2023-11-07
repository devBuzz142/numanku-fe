import * as S from './Badge.style';
const Badge = ({ children, backgroundColor = '#ffffff', ...props }) => {
  return (
    <S.Badge {...props} backgroundColor={backgroundColor}>
      {children}
    </S.Badge>
  );
};

export default Badge;
