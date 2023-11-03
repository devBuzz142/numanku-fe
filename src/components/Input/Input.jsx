import * as S from './Input.style';

const Input = ({ label, id, type = 'text', placeholder, ...props }) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={props.onChange}
        width={props.width}
      />
    </S.InputContainer>
  );
};

export default Input;
