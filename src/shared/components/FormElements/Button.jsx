import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  danger,
  inverse,
  big,
  onClick,
  disabled,
  type,
  to,
}) => {
  if (to) {
    return (
      <Link
        className={`button ${danger && "button--danger"} ${
          inverse && "button--inverse"
        } ${big ? "button--big" : "button--small"}`}
        onClick={onClick}
        disabled={disabled}
        to={to}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`button ${danger && "button--danger"} ${
        inverse && "button--inverse"
      } ${big ? "button--big" : "button--small"}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
