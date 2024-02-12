import UserList from "../components/UserList";

const Users = () => {
  const USERSARR = [
    {
      id: 1,
      name: "Pratap padekar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRau3LRm__X28IiVN9iddcY7WzrALBVGAKx09i1VsXQrw&s",
      places: 5,
    },
  ];

  return (
    <div>
      <UserList userListItems={USERSARR} />
    </div>
  );
};
export default Users;
