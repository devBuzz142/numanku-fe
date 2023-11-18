import styled from '@emotion/styled';
import LOGIN_PAGE from '../../assets/images/view-login-page.png';

export const ViewLoginPageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${LOGIN_PAGE}) no-repeat center;
`;

export const HeaderContainer = styled.div`
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackIconWrapper = styled.div`
  position: absolute;
  left: -120px;

  ::before {
    content: '';
    position: absolute;

    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GuideWrapper = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Guide = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  color: #857671;
  text-decoration-line: underline;
`;

export const GuideClick = styled.div`
  display: flex;
  align-items: center;
`;

export const MainContainer = styled.div`
  margin-top: 60px;

  border-radius: 20px;
  padding: 16px;

  background-color: rgba(255, 255, 255, 0.3);
`;

export const Form = styled.form`
  height: 688px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  margin-top: 124px;

  width: 100%;

  display: flex;
  justify-content: center;
`;

export const GuideContentContinaer = styled.div`
  margin-top: 80px;
  width: 600px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export const Contact = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  font-size: 16px;
  font-weight: 100;
  bottom: 80px;
`;
