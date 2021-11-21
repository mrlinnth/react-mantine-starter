import { Divider, Text } from "@mantine/core";
import { MainTemplate } from "components/template";
import UsersList from "modules/Users";

const Home = () => {
  return (
    <MainTemplate>
      <Text>Home page</Text>
      <Divider />
      <UsersList />
    </MainTemplate>
  );
};

export default Home;
