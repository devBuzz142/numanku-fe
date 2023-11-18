import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 40px;
  height: 40px;

  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;

    background-color: #000;
    content: '';
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ModalContent = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
