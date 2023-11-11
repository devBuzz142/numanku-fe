import { useRef, useState } from 'react';
import * as S from './Input.style';
import Icon from '../Icon/Icon';

const Input = ({
  id,
  type = 'text',
  label,
  labelAlign = 'left',
  placeholder,
  backgroundColor,
  noBorder = false,
  ...props
}) => {
  const imageInputRef = useRef(null);

  if (type === 'image') {
    return (
      <S.InputContainer>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.ImageUploadButton
          type="button"
          width={props.width}
          height={props.width}
          onClick={() => imageInputRef.current.click()}
        >
          <Icon name="IMAGE_CIRCLE" width={48} height={48} />
        </S.ImageUploadButton>
        <S.ImageInput
          type="file"
          id={id}
          accept="image/*"
          width={props.width}
          ref={imageInputRef}
          onChange={props.onChange}
        />
      </S.InputContainer>
    );
  }

  if (type === "textarea") {
    return (
      <S.InputContainer>
        <S.textarea
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={props.onChange}
          width={props.width}
          backgroundColor={backgroundColor}
          noBorder={noBorder}
        />
      </S.InputContainer>
    )
  }

  return (
    <S.InputContainer>
      <S.Label htmlFor={id} labelAlign={labelAlign}>
        {label}
      </S.Label>
      <S.Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={props.onChange}
        width={props.width}
        backgroundColor={backgroundColor}
        noBorder={noBorder}
      />
    </S.InputContainer>
  );
};

export default Input;
