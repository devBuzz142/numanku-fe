import styled from '@emotion/styled';

export const MakeInfoPageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const HeaderContainer = styled.div`
  margin-top: 138px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  height: 192px;

  display: flex;
  flex-direction: column;
`;

export const GuideWrapper = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
`;

export const Guide = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  color: #857671;
  text-decoration-line: underline;
`;

export const MainContainer = styled.div`
  margin-top: 50px;
  border-radius: 20px;
  padding: 16px;

  background-color: rgba(255, 255, 255, 0.3);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 124px;

  width: 100%;

  display: flex;
  justify-content: center;
`;
