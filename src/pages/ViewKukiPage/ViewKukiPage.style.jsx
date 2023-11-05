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

  border-radius: 50px;
  border: 5px solid #4e413b;

  display: flex;
  justify-content: center;
  align-items: center;
`;
