import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/apiUsers";

const useUsers = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return { users, isLoading, isError, error };
};
export default useUsers;
