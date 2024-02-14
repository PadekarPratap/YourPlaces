import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiUsers";

const useLogin = () => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: loginApi,
  });

  return { mutate, isError, isPending, isSuccess, error };
};

export default useLogin;
