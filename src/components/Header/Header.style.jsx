import styled from '@emotion/styled';

export const Header = styled.div`
  width: ${(props) => props.width}px;

  font-family: EF_jejudoldam;
  font-size: ${(props) => props.fontSize || 64}px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 96px */
  letter-spacing: -0.704px;
  color: ${(props) => props.color};

  overflow-wrap: break-word;
`;
