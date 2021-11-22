import { useQuery } from "react-query";
import { Users } from "./api";

const config = { refetchOnWindowFocus: false };

const getUsers = async () => {
  const { data } = await Users.index();
  return data;
};

export function useUsers() {
  return useQuery("users.index", getUsers, config);
}

const getSingle = async () => {
  const { data } = await Users.single();
  return data;
};

export function useUsersSingle() {
  return useQuery("users.single", getSingle);
}
