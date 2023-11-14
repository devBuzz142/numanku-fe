import styled from '@emotion/styled';

export const MakeDesignPage = styled.div`
  top: 44px;
  left: 50%;
  transform: translateX(-50%);

  width: 710px;
  height: 1540px;

  border-radius: 30px;
  border: 5px solid #4e413b;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const CanvasWrapper = styled.div`
  width: 680px;
  height: 680px;

  border-radius: 30px;
  border: 5px solid #4e413b;

  ::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;

    width: 680px;
    height: 680px;

    background-color: white;
    opacity: 0.5;
  }
`;

export const ControllerContainer = styled.div`
  width: 700px;
`;

export const ToolWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-right: 16px;

  display: flex;
  justify-content: flex-end;
`;

export const Tool = styled.div`
  width: 88px;
  height: 88px;

  border: ${({ selected }) => (selected ? '8px solid black' : 'none')};
  border-radius: 50%;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
`;

export const Controller = styled.div`
  margin-top: 20px;
  border-radius: 30px;
  background: #4e413b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuTab = styled.div`
  margin-top: 20px;
  width: 660px;

  display: flex;
  justify-content: space-between;
`;

export const MenuTabItem = styled.div`
  border-radius: 20px;
  width: 188px;
  height: 64px;

  background-color: rgba(255, 255, 255, 0.6);
  color: white;

  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */
  letter-spacing: -0.396px;

  ${({ selected }) =>
    selected &&
    `
      background-color: white;
      color: #BC5148;
  `}

  ${({ selected }) =>
    selected &&
    `
  ::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -42px;

    width: 188px;
    height: 60px;

    background-color: white;
  }
  `}
`;

export const DrawingTab = styled.div`
  margin-top: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 660px;
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  justify-content: space-between;

  background-color: white;
`;

export const DrawingTabItem = styled.div`
  border: 4px solid black;
  border-radius: 30px;
  width: 180px;
  height: 180px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected }) =>
    selected &&
    `
    border: 6px solid #FC5103;
    `}
`;

export const ColorTab = styled.div`
  display: flex;

  background-color: white;
`;

export const CollorPalleteWrapper = styled.div`
  width: 660px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;
