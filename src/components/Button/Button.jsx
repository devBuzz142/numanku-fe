import * as S from './Button.style';

const Button = ({
  children,
  width = 550,
  height = 100,
  backgroundColor = '#BC5148',
  color = '#FFFFFF',
  ...props
}) => (
  <S.Button
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    color={color}
    {...props}
  >
    {children}
  </S.Button>
);

export default Button;
