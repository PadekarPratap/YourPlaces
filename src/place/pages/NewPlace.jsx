import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";
import useCreatePlace from "../../hooks/place/useCreatePlace";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import ErrorModal from "../../shared/components/Modal/ErrorModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

const NewPlace = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const [showErrorModal, setShowErrorModal] = useState(false);

  const navigate = useNavigate();

  const { mutate, isPending, isError, error, isSuccess } = useCreatePlace();

  const onSubmit = (data) => {
    const { title, description, address } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("address", address);
    // temporary
    formData.append("image", data.image[0]);

    mutate(formData);
  };

  useEffect(() => {
    if (isError) {
      setShowErrorModal(true);
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [isError, isSuccess, navigate]);

  return (
    <div>
      {isPending && <LoadingSpinner asOverlay />}
      {showErrorModal && (
        <ErrorModal
          closeModalState={() => setShowErrorModal(false)}
          closeModal={
            <Button big danger onClick={() => setShowErrorModal(false)}>
              Close
            </Button>
          }
          errorMessage={error?.response?.data?.message}
        />
      )}
      <form className="place-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="title"
          element="input"
          label="Title"
          register={register}
          text="title"
          validator={{
            required: "Title is a required field",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 30,
              message: "Title cannot exceed 30 characters",
            },
          }}
          isError={errors.title}
          errorText={errors.title?.message}
        />

        <Input
          id="description"
          label="Description"
          text="description"
          register={register}
          validator={{ required: "Description of the place is required." }}
          isError={errors.description}
          errorText={errors.description?.message}
          row={6}
        />

        <Input
          element="input"
          id="address"
          label="Address"
          text="address"
          register={register}
          type="text"
          validator={{
            required: "Address cannot be empty!",
            minLength: {
              value: 5,
              message: "Address invalid",
            },
          }}
          isError={errors.address}
          errorText={errors.address?.message}
        />

        {/* image for the place  */}
        <ImageUpload
          id="place-image"
          register={register}
          registerText="image"
          validator={{ required: "Image is required" }}
          isError={errors.image}
          errorText={errors.image?.message}
          imagePickerText="Pick Place Image"
        />

        <Button
          type="submit"
          disabled={!formState.isDirty || !formState.isValid}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default NewPlace;
