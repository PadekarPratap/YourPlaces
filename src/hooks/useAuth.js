import { useContext } from "react";
import { AuthContext } from "../shared/components/context/Auth-Context";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
