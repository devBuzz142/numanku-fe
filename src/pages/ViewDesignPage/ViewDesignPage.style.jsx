import styled from '@emotion/styled';

export const ViewDesignPage = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 192px;

  display: flex;
  justify-content: center;

  text-align: center;
`;

export const IconWrapper = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  left: 60px;
`;

export const KukiContainer = styled.div`
  margin-top: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KukiWrapper = styled.div`
  width: 520px;
  height: 520px;

  border: 6px dotted #bc5148;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 30px;
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

    background-image: url(${({ outter }) => outter});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    opacity: ${({ menu }) => (menu === 'outter' ? 1 : 0.5)};
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;

    background-image: url(${({ inner }) => inner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    opacity: ${({ menu }) => (menu === 'inner' ? 1 : 0.5)};
  }
`;

export const ControllerContainer = styled.div`
  margin-top: 80px;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuTab = styled.div`
  width: 375px;
  height: 100px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  background-color: ${({ selected }) => (selected ? '#4E413B' : '#857671')};

  color: #fff;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */
  letter-spacing: -0.396px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Controller = styled.div`
  width: 100%;

  background-color: #f6eddd;
`;

export const DrawingContainer = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;

  display: ${({ selected }) => (selected ? 'flex' : 'none')};
  justify-content: space-between;
`;

export const DrawingWrapper = styled.div`
  margin-top: 80px;
  width: 180px;
  height: 180px;
  border: ${({ selected }) => (selected ? '10px solid orange' : 'none')};
  border-radius: 30px;

  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  width: 100%;

  display: flex;
  justify-content: center;
`;
