import { NavLink, useNavigate } from "react-router-dom";

import "./NavLinks.css";
import useAuth from "../../../hooks/useAuth";
import Button from "../FormElements/Button";

const NavLinks = ({ toogleDrawer }) => {
  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <ul className="nav-links">
      <li onClick={toogleDrawer}>
        <NavLink to={"/"}>All Users</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li onClick={toogleDrawer}>
            <NavLink to={"/1/places"}>My Places</NavLink>
          </li>
          <li onClick={toogleDrawer}>
            <NavLink to={"/place/new"}>New Place</NavLink>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <li onClick={toogleDrawer}>
          <NavLink to={"/auth"}>Authenticate</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            danger
          >
            Logout
          </Button>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
