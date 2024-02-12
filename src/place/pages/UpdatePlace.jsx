import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";

const UpdatePlace = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="center">Update ....</h2>
      <form className="place-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          element="input"
          type="text"
          id="title"
          register={register}
          text="title"
          label="Title"
          validator={{ required: "Title cannot be empty" }}
          isError={errors.title}
          errorText={errors.title?.message}
        />
        <Input
          id="description"
          register={register}
          text="description"
          label="Description"
          validator={{ required: "Description of the place is required!" }}
          isError={errors.description}
          errorText={errors.description?.message}
        />

        <Button
          disabled={!formState.isDirty || !formState.isValid}
          big
          inverse
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};
export default UpdatePlace;
