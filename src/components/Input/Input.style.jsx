import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 22px;

  color: #4e413b;

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 48px */
  letter-spacing: -0.352px;

  text-align: ${(props) => props.labelAlign || 'left'};
`;

export const Input = styled.input`
  width: ${(props) => props.width + 'px' || '100%'};
  height: 100px;

  border-radius: 30px;
  border: ${(props) => (props.noBorder ? 'none' : '5px solid #4e413b')};
  background-color: ${(props) => props.backgroundColor};

  padding: 5px;
  text-indent: 12px;

  font-size: 24px;
`;

export const KukiContents = styled.input`
  width: ${(props) => props.width + 'px' || '100%'};
  height: 630px;

  border-radius: 30px;
  border: 5px solid #4e413b;

  padding: 5px;

  font-size: 24px;
`;

export const ImageUploadButton = styled.button`
  width: ${(props) => props.width + 'px' || '100%'};
  height: ${(props) => props.width + 'px' || '100%'};

  border-radius: 30px;
  background-color: #4e413b;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Textarea = styled.textarea`
  width: 750px;
  height: 630px;

  padding: 5px;

  font-size: 30px;

  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;

  text-indent: 12px;
`;
