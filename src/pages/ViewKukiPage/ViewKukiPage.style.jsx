import styled from '@emotion/styled';

export const ViewKukiPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  margin-top: 90px;

  width: 100%;
  height: 72px;

  display: flex;
  justify-content: center;
`;

export const BackIconWrapper = styled.div`
  position: absolute;

  left: 72px;
`;

export const TitleWrapper = styled.div``;

export const KukiContainer = styled.div`
  margin-top: 70px;

  max-width: 600px;
  min-width: 520px;
  max-height: 600px;
  min-height: 520px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.outter});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90%;
    height: 90%;

    background-image: url(${(props) => props.inner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 64px;

  width: 600px;
  height: 630px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: 'UhBeeZZIBA-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/UhBeeZZIBA-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'UhBeeZZIBA-Regular';
  font-size: 28px;
`;

export const HeartWrapper = styled.div`
  position: absolute;
  bottom: 36px;

  left: 50%;
  transform: translateX(-50%);

  width: 72px;
`;

export const BadgeWrapper = styled.div`
  right: -20px;
  transform: translateY(-50%);

  width: 40px;
  height: 40px;

  position: absolute;

  z-index: 1;

  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 30px */
  letter-spacing: -0.22px;

  color: #4e413b;
`;
