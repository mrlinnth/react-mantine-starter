import { Alert, List, Loader } from "@mantine/core";
import { useUsers } from "hooks/users.hooks";
import { UserType } from "types/users.types";

const UsersList = () => {
  const { isLoading, error, data, isSuccess } = useUsers();

  if (isLoading) return <Loader />;

  if (error) return <Alert color="red">Error : {error}</Alert>;

  return (
    <List>
      {isSuccess &&
        data.map((user: UserType, index: number) => (
          <List.Item key={index}>{user.email}</List.Item>
        ))}
    </List>
  );
};

export default UsersList;
