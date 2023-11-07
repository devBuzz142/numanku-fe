import { useRef, useState } from 'react';
import * as S from './Input.style';
import Icon from '../Icon/Icon';

const Input = ({ label, id, type = 'text', placeholder, ...props }) => {
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

  if (id ==='KukiContents') {
    return (
      <S.InputContainer>
        <S.KukiContents
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={props.onChange}
          width={props.width}
        />
      </S.InputContainer>
    );
  };


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
