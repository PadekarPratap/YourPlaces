import axios from "../../api/axios.js";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../../shared/components/LoadingSpinner.jsx";
import Card from "../../shared/components/Card";
import useUpdatePlace from "../../hooks/place/useUpdatePlace.js";

const UpdatePlace = () => {
  const { placeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");

  const { mutate, isPending } = useUpdatePlace();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: async () => {
      setIsLoading(true);
      try {
        setError(null);
        const { data } = await axios.get(`/api/places/${placeId}`);
        console.log(data);
        setTitle(data.place.title);
        setIsLoading(false);
        return {
          title: data.place.title,
          description: data.place.description,
        };
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again!");
        setIsLoading(false);
      }
    },
    mode: "onChange",
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const { title, description } = data;

    mutate({ values: { title, description }, placeId: placeId });
  };

  if (isLoading) return <LoadingSpinner asOverlay />;

  if (isPending) return <LoadingSpinner asOverlay />;

  return (
    <div>
      {error ? (
        <Card>{error} </Card>
      ) : (
        <>
          <h2 className="center">Update {title}</h2>
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
          </form>{" "}
        </>
      )}
    </div>
  );
};
export default UpdatePlace;
