import styled from '@emotion/styled';

export const KukiContainer = styled.div`
  left: ${({ left }) => left}px;

  width: 150px;
  height: 150px;

  border-radius: 30px;
  border: 4px dotted #bc5148;

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f6eddd;
    opacity: 0.8;
    border-radius: 30px;
  }
`;

export const KukiWrapper = styled.div`
  width: ${({ likeCount }) => 90 + Math.min(50, likeCount * 10)}px;
  height: ${({ likeCount }) => 90 + Math.min(50, likeCount * 10)}px;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.outter});
    background-size: cover;
    background-position: center;
    border-radius: 30px;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.inner});
    background-size: cover;
    background-position: center;
    border-radius: 30px;
  }
`;
