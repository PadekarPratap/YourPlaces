import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({
  header,
  onSubmit,
  footer,
  children,
  modalHeaderClass,
  modalContentClass,
  footerContentClass,
  closeModal,
  modalClass,
}) => {
  const content = (
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className={`modal ${modalClass}`}>
        <header className={`modal__header ${modalHeaderClass}`}>
          <h1>{header}</h1>
        </header>
        <hr />
        <form
          onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}
          className={modalContentClass}
        >
          {children}
          <footer className={`${footerContentClass} footerClass`}>
            {footer}
          </footer>
        </form>
      </div>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};
export default Modal;
