import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import st from "./styles.module.css";

const Modal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const modal = useRef();

  function outsiteClickClose(event) {
    if (modal.current && !modal.current.contains(event.target)) {
      setOpen(false);
    }
  }

  return (
    <>
      {open &&
        ReactDOM.createPortal(
          <div onClick={outsiteClickClose} className={st.modal}>
            <div ref={modal} className={st.modalWrap}>
              <button onClick={() => setOpen(false)}>X</button>
              {children}
            </div>
          </div>,
          document.body
        )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        Open modal
      </button>
    </>
  );
};

export default Modal;
