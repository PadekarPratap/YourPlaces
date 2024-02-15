import { Link } from "react-router-dom";
import Card from "../components/Card";

import "./NotFound.css";

const NotFound = () => {
  return (
    <Card>
      <p className="error-page-not-found">Error: Page not found...</p>
      <Link to={"/"}>Go Home</Link>
    </Card>
  );
};
export default NotFound;
