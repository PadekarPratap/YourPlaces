import { Link } from "react-router-dom";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = ({ placeItemsList }) => {
  if (placeItemsList.length === 0)
    return (
      <div className="place-list center">
        No places found. Maybe create one to share with others?
        <Link to={`/place/new`}>Share Places</Link>
      </div>
    );

  return (
    <ul className="place-list">
      {placeItemsList.map((place) => (
        <PlaceItem key={place._id} place={place} />
      ))}
    </ul>
  );
};
export default PlaceList;
