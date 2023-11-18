import styled from '@emotion/styled';
import LOGIN_PAGE from '../../assets/images/view-login-page.png';

export const HomePage = styled.div`
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

export const ChannelList = styled.div`
  margin-top: 80px;

  height: 660px;

  overflow-y: scroll;
`;

export const ChannelWrapper = styled.div`
  margin-top: 40px;

  button {
    font-size: 28px;
  }
`;
