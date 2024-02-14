import { useQuery } from "@tanstack/react-query";
import { getPlacesByUserId } from "../../services/apiPlaces";

const usePlaceByUserId = (userID) => {
  const {
    data: places,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["placeByUserId", userID],
    queryFn: () => getPlacesByUserId(userID),
  });

  return { places, isError, isLoading, error };
};
export default usePlaceByUserId;
