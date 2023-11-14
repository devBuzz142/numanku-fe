import styled from '@emotion/styled';

export const ViewMainPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
  }
`;

export const PlusButtonWrapper = styled.div`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
`;

export const PlusButton = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 6px solid #ffffff;

  background-color: #bc5148;

  display: flex;
  justify-content: center;
  align-items: center;
`;
