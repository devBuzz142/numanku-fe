import * as S from './Header.style';

const Header = ({ children, ...props }) => {
  return <S.Header {...props}>{children}</S.Header>;
};

export default Header;
