import ReactDOM from "react-dom";
import "./Backdrop.css";
const BackdropDrawer = ({ close }) => {
  const backDrop = <div className="backdrop" onClick={close}></div>;

  return ReactDOM.createPortal(
    backDrop,
    document.getElementById("backDrop-drawer")
  );
};
export default BackdropDrawer;
