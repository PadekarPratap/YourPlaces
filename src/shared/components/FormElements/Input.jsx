import "./Input.css";

const Input = ({
  id,
  label,
  element,
  type,
  register,
  text,
  validator,
  isError,
  errorText,
  defaultValue = "",
  placeholder,
  row = 3,
}) => {
  const inputElement =
    element === "input" ? (
      <input
        id={id}
        type={type}
        {...register(text, validator)}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        id={id}
        rows={row}
        {...register(text, validator)}
        defaultValue={defaultValue}
        placeholder={placeholder}
      ></textarea>
    );
  return (
    <div className={`form-control ${isError && "form-control--invalid"} `}>
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {isError && <p>{errorText}</p>}
    </div>
  );
};
export default Input;
