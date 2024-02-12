import ReactDOM from "react-dom";
import "./Modal.css";

const ModalOverlay = ({
  header,
  onSubmit,
  footer,
  children,
  modalHeaderClass,
  modalContentClass,
  footerContentClass,
}) => {
  return (
    <div className="modal">
      <header className={`modal__header ${modalHeaderClass}`}>
        <h1>{header}</h1>
      </header>
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
  );
};

const Modal = (props) => {
  const content = (
    <>
      <div className="modal-backdrop" onClick={props.closeModal}></div>
      <ModalOverlay {...props} />
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};
export default Modal;
