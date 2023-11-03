import * as S from './Button.style';

const Button = ({ children, width = 550, height = 100, ...props }) => (
  <S.Button width={width} height={height} {...props}>
    {children}
  </S.Button>
);

export default Button;
