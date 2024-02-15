import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiUsers";
import useAuth from "../useAuth";

const useLogin = () => {
  const { login } = useAuth();

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const { userId, token } = data;
      login(userId, token);
    },
  });

  return { mutate, isError, isPending, isSuccess, error };
};

export default useLogin;
