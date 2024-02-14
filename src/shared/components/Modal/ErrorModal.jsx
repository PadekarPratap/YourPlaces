import Modal from "./Modal";
import "./ErrorModal.css";

const ErrorModal = ({ errorMessage, closeModal, closeModalState }) => {
  return (
    <Modal
      header="An Error Occured!"
      modalContentClass="modal-content"
      footer={closeModal}
      closeModal={closeModalState}
      modalClass={"modal"}
    >
      {errorMessage}
    </Modal>
  );
};
export default ErrorModal;
