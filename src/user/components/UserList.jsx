import Card from "../../shared/components/Card";
import UserItem from "./UserItem";
import "./userList.css";

const UserList = ({ userListItems }) => {
  if (userListItems?.users.length === 0) return <Card>No Users found...</Card>;

  return (
    <ul className="users-list center">
      {userListItems?.users.map((user) => (
        <UserItem user={user} key={user._id} />
      ))}
    </ul>
  );
};
export default UserList;
