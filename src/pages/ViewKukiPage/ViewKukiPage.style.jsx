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

  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
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
