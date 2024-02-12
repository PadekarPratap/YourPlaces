import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import Modal from "../../shared/components/Modal/Modal";
import Map from "../../shared/components/Map/Map";
import useAuth from "../../hooks/useAuth";

const PlaceItem = ({ place }) => {
  const [showMap, setShowMap] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  const openWarning = () => setShowDeleteWarning(true);
  const closeWarning = () => setShowDeleteWarning(false);

  const { isLoggedIn } = useAuth();

  const { title, description, address, location, image, id } = place;

  return (
    <li className="place-item">
      <div className="place-item__image">
        <img src={image} alt={title} />
      </div>
      <div className="place-item__info">
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </div>
      <div className="place-item__actions">
        <Button inverse onClick={openMap}>
          View on Map
        </Button>
        {isLoggedIn && <Button to={`/place/${id}`}>Edit</Button>}
        {isLoggedIn && (
          <Button danger onClick={openWarning}>
            Delete
          </Button>
        )}
      </div>

      {/* Map modal will be rendered outside the DOM tree  */}
      {showMap && (
        <Modal
          closeModal={closeMap}
          header={title}
          footer={
            <Button onClick={closeMap} danger big>
              Close
            </Button>
          }
        >
          <Map lat={location.lat} lng={location.lng} title={title} />
        </Modal>
      )}

      {/* Delete Modal will appear outside the DOM tree  */}
      {showDeleteWarning && (
        <Modal
          header={`Delete ${title}`}
          modalHeaderClass={"header_class"}
          closeModal={closeWarning}
          footer={
            <>
              <Button inverse big onClick={closeWarning}>
                Cancel
              </Button>
              {/* writing the function to delete the item is remainig...  */}
              <Button big danger>
                Delete
              </Button>
            </>
          }
        >
          <p className="modal__content">
            Are you sure you want to delete this place? This action cannot be
            undone!
          </p>
        </Modal>
      )}
    </li>
  );
};
export default PlaceItem;
