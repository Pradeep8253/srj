"use client";
import React, { useEffect } from "react";
import "../Modal/Modal.css";

const Modal = ({ show, handleClose, children }) => {
  useEffect(() => {
    const modalMain = document.querySelector(".modal-main");
    if (show) {
      modalMain.style.animationPlayState = "running";
    }
  }, [show]);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
