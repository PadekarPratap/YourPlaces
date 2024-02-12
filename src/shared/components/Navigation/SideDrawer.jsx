import "./SideDrawer.css";
import ReactDOM from "react-dom";

const SideDrawer = ({ children }) => {
  const content = <div className="side-drawer">{children}</div>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
