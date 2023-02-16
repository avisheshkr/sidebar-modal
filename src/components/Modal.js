import { FaTimes } from "react-icons/fa";

const Modal = ({ setModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <FaTimes className="btn-close" onClick={() => setModal(false)} />
        <h1>Modal Content</h1>
      </div>
    </div>
  );
};

export default Modal;
