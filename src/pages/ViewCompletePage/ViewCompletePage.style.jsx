import styled from '@emotion/styled';
import COMPLETE_PAGE from '../../assets/images/view-complete-page.png';

export const ViewCompletePage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${COMPLETE_PAGE}) no-repeat center;
`;

export const HeaderContainer = styled.div`
  margin-top: 320px;

  width: 100%;
  height: 96px;

  display: flex;
  justify-content: center;

  font-size: 64px;
`;

export const KukiContainer = styled.div`
  margin-top: 240px;

  max-width: 600px;
  min-width: 520px;
  max-height: 600px;
  min-height: 520px;

  display: flex;
  justify-content: center;

  ::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background: url(${(props) => props.outter}) no-repeat center;
    background-size: contain;
  }

  ::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background: url(${(props) => props.inner}) no-repeat center;
    background-size: contain;
  }
`;
