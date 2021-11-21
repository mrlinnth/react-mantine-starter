import { SimpleGrid, Text } from "@mantine/core";
import { isEmptyNameAtom } from "atoms/greetingBox";
import { MainTemplate } from "components/template";
import { useAtom } from "jotai";
import UsersList from "modules/Users";
import GreetingBox from "../components/GreetingBox";

const Home = () => {
  const [isEmptyName] = useAtom(isEmptyNameAtom);

  const isEmpty = isEmptyName ? "empty" : "not empty";

  return (
    <MainTemplate>
      <SimpleGrid cols={1}>
        <Text>Home page with UsersList and GreetingBox components.</Text>
        <Text>UsersList uses react-query and fakerapi.</Text>
        <Text>GreetingBox uses jotai. GreetingBox is {isEmpty}.</Text>
        <UsersList />
        <GreetingBox />
      </SimpleGrid>
    </MainTemplate>
  );
};

export default Home;
