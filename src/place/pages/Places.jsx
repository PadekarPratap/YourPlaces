import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import usePlaceByUserId from "../../hooks/place/usePlaceByUserId";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import Card from "../../shared/components/Card";

const Places = () => {
  // const { userId } = useParams();

  const userId = "65cbd0f5dd363b15548cc3b1";

  const { places, isError, isLoading, error } = usePlaceByUserId(userId);

  if (isLoading) return <LoadingSpinner asOverlay />;

  return (
    <div>
      {isError ? (
        <Card>
          {error?.response?.data.message ||
            "Couldn't fetch the Places. Please try again later"}
        </Card>
      ) : (
        <PlaceList placeItemsList={places?.places} />
      )}
    </div>
  );
};
export default Places;
