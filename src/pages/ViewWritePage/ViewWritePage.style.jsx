import styled from '@emotion/styled';
import CHECK_LINE from '../../assets/icons/check.svg';

export const ViewWritePageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fef8e6;
`;

export const TopContainer = styled.div`
  margin-top: 80px;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const UndoWrapper = styled.div`
  margin-top: 8px;
  margin-left: 77px;

  display: flex;
`;

export const NameWrapper = styled.div`
  margin-left: 36px;
  width: 450px;

  display: flex;
  justify-content: center;

  font-size: 48px;
`;

export const KukiContainer = styled.div`
  margin-top: 28px;

  width: 450px;
  height: 450px;
  border-radius: 30px;
  border: 6px dotted #bc5148;

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: white;
    opacity: 0.5;
  }
`;

export const Kuki = styled.div`
  width: 80%;
  height: 80%;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-image: ${(props) => `url(${props.outter})`};
    background-position: center;
    background-size: cover;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-image: ${(props) => `url(${props.inner})`};
    background-position: center;
    background-size: cover;
  }
`;

export const LockBadgeWrapper = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  z-index: 1;

  display: ${(props) => (props.lock ? 'block' : 'none')};
`;

export const KukiContentsContainer = styled.div`
  margin-top: 80px;
  border-radius: 20px;
  padding: 16px;

  width: 100%;

  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpeechBubbleWrapper = styled.div`
  width: 600px;
  height: 600px;
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;
`;

export const CheckBoxContainer = styled.div`
  margin-top: 35px;

  width: 100%;

  display: flex;
  align-items: center;

  font-size: 32px;
`;

export const AnonymousWrapper = styled.div`
  display: block;
  margin-left: 160px;
  margin-right: 95px;

  display: flex;
  align-items: center;
`;

export const PrivateWrapper = styled.div`
  margin-left: 72px;

  display: flex;
  align-items: center;
`;

export const CheckBox = styled.div`
  width: 35px;
  height: 35px;

  border: 4px solid black;
  border-radius: 5px;

  ::after {
    content: '';
    position: absolute;
    top: -14px;
    left: -5px;
    width: 40px;
    height: 40px;
    background-image: url(${CHECK_LINE});
    background-position: center;
    background-size: cover;
    z-index: 1;

    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

export const CheckBoxTextWrapper = styled.div`
  margin-left: 20px;

  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;

  width: 100%;

  display: flex;
  justify-content: center;
`;
