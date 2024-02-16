import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlace } from "../../services/apiPlaces";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const useCreatePlace = () => {
  const queryClient = useQueryClient();
  const { userId } = useParams();

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: createPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["placeByUserId", userId],
      });
      toast.success("Place created successfully");
    },
  });

  return { mutate, isError, isPending, isSuccess, error };
};
export default useCreatePlace;
