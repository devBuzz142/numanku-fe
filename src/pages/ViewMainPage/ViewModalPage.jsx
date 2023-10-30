function Modal({ isModalOpen, closeModal }) {
  return (
    <div style={{ display: isModalOpen ? "block" : "none"}}>
      Modal
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

export default Modal;