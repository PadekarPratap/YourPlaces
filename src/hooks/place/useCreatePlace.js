import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../services/apiPlaces";
import { toast } from "react-toastify";

const useCreatePlace = () => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: createPlace,
    onSuccess: () => toast.success("Place created successfully"),
  });

  return { mutate, isError, isPending, isSuccess, error };
};
export default useCreatePlace;
