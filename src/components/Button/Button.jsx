import * as S from './Button.style';

const Button = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
