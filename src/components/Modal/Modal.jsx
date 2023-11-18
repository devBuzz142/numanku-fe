import * as S from './Modal.style';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <S.ModalContainer isOpen={isOpen} onClick={onClose}>
      <S.ModalClose onClick={onClose} />
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
