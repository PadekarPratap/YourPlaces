import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiUsers";
import { toast } from "react-toastify";
import useAuth from "../useAuth";

const useSignUp = () => {
  const { login } = useAuth();

  const { mutate, isError, isSuccess, isPending, error } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      // console.log(data);
      login(data.userId, data.token);
      toast.success("Sign up successfull!");
    },
  });

  return { mutate, isError, isSuccess, isPending, error };
};

export default useSignUp;
