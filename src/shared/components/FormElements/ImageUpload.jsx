import { useEffect, useState } from "react";

import "./ImageUpload.css";

const ImageUpload = ({
  id,
  imagePickerText,
  register,
  registerText,
  isError,
  errorText,
  validator,
}) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const imageHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const pickedFile = e.target.files[0];
      setFile(pickedFile);
    }
  };

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <div className={`form-control ${isError && "form-control--invalid"}`}>
      <input
        type="file"
        id={id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        {...register(registerText, { ...validator, onChange: imageHandler })}
      />
      <div className="image-preview">
        {previewUrl && (
          <img
            className="image-preview__image"
            src={previewUrl}
            alt="preview"
          />
        )}
        {/* unnecessary component makes website look ugly (muted) 👇 */}
        {/* {!previewUrl && (
          <p className="image-preview__image">{imagePickerText}</p>
        )} */}
        <label className="image__label" role="button" htmlFor={id}>
          {imagePickerText}
        </label>
        {isError && <p>{errorText}</p>}
      </div>
    </div>
  );
};
export default ImageUpload;
