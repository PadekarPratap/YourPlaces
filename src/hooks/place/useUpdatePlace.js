import { useMutation } from "@tanstack/react-query";
import { updatePlaceApi } from "../../services/apiPlaces";
import { toast } from "react-toastify";

const useUpdatePlace = () => {
  const { mutate, isError, error, isPending, isSuccess } = useMutation({
    mutationFn: ({ values, placeId }) => updatePlaceApi(values, placeId),
    onSuccess: () => toast.success("Place updated successfully"),
    onError: (error) =>
      toast.error(
        error.response.data.Error[0].msg ||
          "Something went wrong! Couldn't update the place. please try again"
      ),
  });

  return { mutate, isError, error, isPending, isSuccess };
};
export default useUpdatePlace;
