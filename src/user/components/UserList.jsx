import UserItem from "./UserItem";
import "./userList.css";

const UserList = ({ userListItems }) => {
  if (userListItems.length === 0) return <div>No Users found...</div>;

  return (
    <ul className="users-list center">
      {userListItems.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
};
export default UserList;
