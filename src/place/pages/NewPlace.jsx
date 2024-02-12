import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";

const NewPlace = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <div>
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
