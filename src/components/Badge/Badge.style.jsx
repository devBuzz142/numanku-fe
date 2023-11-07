import styled from '@emotion/styled';

export const Badge = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 50px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;
