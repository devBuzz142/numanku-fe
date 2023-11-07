import * as S from './Header.style';

const Header = ({ children, fontSize = 64, ...props }) => {
  return (
    <S.Header fontSize={fontSize} {...props}>
      {children}
    </S.Header>
  );
};

export default Header;
