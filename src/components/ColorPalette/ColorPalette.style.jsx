import styled from '@emotion/styled';

export const ColorPalette = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 12px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

export const ColorTab = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const ColorBarTabItemWrapper = styled.div`
  background-color: white;

  border-radius: 50%;
  border: none;
`;

export const ColorTabItem = styled.div`
  width: 58px;
  height: 58px;

  border-radius: 50%;
  border: ${({ active }) => (active ? '5px solid #FEF8E6' : 'none')};

  background-color: ${({ color }) => color};
`;

export const ColorBarWrapper = styled.div`
  width: 100%;
  height: 28px;

  background-color: white;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ColorBarHandler = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 50%;
  border: 5px solid white;

  position: absolute;
  top: -4px;
`;

export const ColorBar = styled.div`
  width: 100%;
  height: 28px;

  border-radius: 30px;
  background: ${({ color }) =>
    `linear-gradient(to right, white 0%, ${color} 100%)`};
`;
