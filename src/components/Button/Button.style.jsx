import styled from '@emotion/styled';

export const Button = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border-radius: 30px;

  padding-top: 20px;
  padding-bottom: 20px;

  background-color: ${(props) => props.backgroundColor || '#BC5148'};
  color: ${(props) => props.color || '#FFFFFF'};

  font-size: 36px;
  font-style: normal;
  font-weight: 400;
`;
