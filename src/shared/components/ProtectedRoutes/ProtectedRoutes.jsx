import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const { userToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) navigate("/auth");
  }, [userToken, navigate]);

  if (userToken) return <Outlet />;
};

export default ProtectedRoutes;
