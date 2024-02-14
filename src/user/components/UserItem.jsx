import { Link } from "react-router-dom";
import Avatar from "../../shared/components/Avatar";
import Card from "../../shared/components/Card";
import "./userItem.css";

const UserItem = ({ user }) => {
  const { image, name, places } = user;

  const noOfPlaces = places.length;
  const username = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${user._id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{username(name)}</h2>
            <h3>Places: {noOfPlaces}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
