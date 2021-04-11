import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../assets/context";

const Modal = () => {
  const { modal, closeModal } = useGlobalContext();

  return (
    <div className={`modal-overlay ${modal && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal;
