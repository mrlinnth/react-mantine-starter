import { Text } from "@mantine/core";
import { MainTemplate } from "components/template";
import { useUsers } from "hooks/user.hook";
import React, { useEffect } from "react";
import UserType from "types/user.type";

const Home = () => {
  const { isLoading, error, data, isSuccess } = useUsers();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MainTemplate>
      {isSuccess &&
        data.map((user: UserType, index: number) => (
          <Text key={index}>{user.email}</Text>
        ))}

      {isLoading && <Text>Loading</Text>}

      {error && <Text>Error!</Text>}
    </MainTemplate>
  );
};

export default Home;
