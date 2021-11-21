import { Alert, List, Loader } from "@mantine/core";
import { useUsers } from "modules/Users/hooks";
import { UserInterface } from "modules/Users/types";
import { useEffect } from "react";

const UsersList = () => {
  const { isLoading, error, data, isSuccess } = useUsers();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <Loader />;

  if (error) return <Alert color="red">Error : {error}</Alert>;

  return (
    <List>
      {isSuccess &&
        data.map((user: UserInterface, index: number) => (
          <List.Item key={index}>{user.email}</List.Item>
        ))}
    </List>
  );
};

export default UsersList;
