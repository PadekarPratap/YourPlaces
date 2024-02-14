import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiUsers";
import { toast } from "react-toastify";

const useSignUp = () => {
  const { mutate, isError, isSuccess, isPending, error } = useMutation({
    mutationFn: signUp,
    onSuccess: () => toast.success("Sign up successfull!"),
  });

  return { mutate, isError, isSuccess, isPending, error };
};

export default useSignUp;
