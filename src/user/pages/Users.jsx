import { useEffect, useState } from "react";
import useUsers from "../../hooks/user/useUsers";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import ErrorModal from "../../shared/components/Modal/ErrorModal";
import UserList from "../components/UserList";
import Button from "../../shared/components/FormElements/Button";

const Users = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  const { users, error, isError, isLoading } = useUsers();

  useEffect(() => {
    if (isError) setShowErrorModal(true);
  }, [isError]);

  if (isLoading) return <LoadingSpinner asOverlay />;

  if (showErrorModal)
    return (
      <ErrorModal
        closeModal={
          <Button big danger onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        }
        closeModalState={() => setShowErrorModal(false)}
        errorMessage={error.response.data.message}
      />
    );

  return (
    <div>
      <UserList userListItems={users} />
    </div>
  );
};
export default Users;
