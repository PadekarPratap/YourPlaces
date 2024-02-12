import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ lat, lng, zoom = 13, title }) => {
  const position = [lat, lng];
  return (
    <MapContainer
      style={{ height: "60vh", width: "100%", marginBottom: "2rem" }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
