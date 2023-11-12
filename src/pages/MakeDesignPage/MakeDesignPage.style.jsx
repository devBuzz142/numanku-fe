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
`;

export const ControllerContainer = styled.div`
  width: 700px;
`;

export const ToolWrapper = styled.div`
  width: 100%;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Tool = styled.div`
  width: 88px;
  height: 88px;

  border: none;
  border-radius: 50%;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
`;

export const Controller = styled.div`
  border-radius: 30px;
  background: #4e413b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuTab = styled.div`
  display: flex;

  background-color: white;
`;

export const DrawingTab = styled.div`
  display: flex;

  background-color: white;
`;

export const ColorTab = styled.div`
  display: flex;

  background-color: white;
`;

export const CollorPalleteWrapper = styled.div`
  width: 660px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 8px;
`;
