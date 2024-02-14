import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaceApi } from "../../services/apiPlaces";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const useDeletePlace = () => {
  const queryClient = useQueryClient();

  const { userId } = useParams();

  const { mutate, isError, error, isPending, isSuccess } = useMutation({
    mutationFn: deletePlaceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["placeByUserId", userId],
      });
      toast.success("Place deleted successfully");
    },
    onError: () => toast.error("Error deleting place. Please try again later."),
  });

  return { mutate, isError, error, isPending, isSuccess };
};
export default useDeletePlace;
