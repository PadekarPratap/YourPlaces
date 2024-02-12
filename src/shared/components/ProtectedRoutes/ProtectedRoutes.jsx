import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/auth");
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) return <Outlet />;
};

export default ProtectedRoutes;
