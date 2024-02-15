import { NavLink, useNavigate } from "react-router-dom";

import "./NavLinks.css";
import useAuth from "../../../hooks/useAuth";
import Button from "../FormElements/Button";

const NavLinks = ({ toogleDrawer }) => {
  const { logout, userId, userToken } = useAuth();

  const navigate = useNavigate();

  return (
    <ul className="nav-links">
      <li onClick={toogleDrawer}>
        <NavLink to={"/"}>All Users</NavLink>
      </li>
      {userId && userToken && (
        <>
          <li onClick={toogleDrawer}>
            <NavLink to={`/${userId}/places`}>My Places</NavLink>
          </li>
          <li onClick={toogleDrawer}>
            <NavLink to={"/place/new"}>New Place</NavLink>
          </li>
        </>
      )}
      {!userId && !userToken && (
        <li onClick={toogleDrawer}>
          <NavLink to={"/auth"}>Authenticate</NavLink>
        </li>
      )}
      {userId && userToken && (
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
