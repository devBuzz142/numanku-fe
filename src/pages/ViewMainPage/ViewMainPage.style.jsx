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
    background-size: contain;
    background-repeat: repeat-y;
    opacity: 0.7;
  }
`;

export const BackVuttonWrapper = styled.div`
  padding: 10px;

  position: fixed;
  top: 120px;
  left: 50px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;

    border-radius: 50%;
    border: none;
  }
`;

export const InfoButtonWrapper = styled.div`
  position: fixed;

  top: 120px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;
`;

export const InfoButton = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 6px solid #bc5148;

  background-color: #f6eddd;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButtonWrapper = styled.div`
  position: fixed;

  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;

  z-index: 1;
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

export const KukiContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: calc(100% - 280px); */
  padding-left: 25px;
  padding-right: 25px;

  overflow: scroll;
`;

export const KukiWrapper1 = styled.div`
  width: 100%;
  display: flex;
`;

export const KukiWrapper2 = styled.div`
  width: 350px;
`;
