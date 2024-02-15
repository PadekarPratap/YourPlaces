import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import Modal from "../../shared/components/Modal/Modal";
import Map from "../../shared/components/Map/Map";
import useAuth from "../../hooks/useAuth";
import useDeletePlace from "../../hooks/place/useDeletePlace";
import { SERVER } from "../../api/axios";

const PlaceItem = ({ place }) => {
  const { title, description, address, location, image, _id } = place;

  const [showMap, setShowMap] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  const { mutate, isPending } = useDeletePlace();

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  const openWarning = () => setShowDeleteWarning(true);
  const closeWarning = () => setShowDeleteWarning(false);

  const { isLoggedIn } = useAuth();

  const deletePlace = () => {
    mutate(_id);
    closeWarning();
  };

  return (
    <li className="place-item">
      <div className="place-item__image">
        <img src={`${SERVER}/${image}`} alt={title} />
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
        {isLoggedIn && <Button to={`/place/${_id}`}>Edit</Button>}
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
              <Button big danger onClick={deletePlace}>
                {isPending ? <div className="loader" /> : "Delete"}
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
