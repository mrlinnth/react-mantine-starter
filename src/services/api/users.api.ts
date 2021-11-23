import { get } from "config/api";

export const Users = {
  index: () => get("/users"),
  single: (qty: number = 1) => get(`/users/?_quantity=${qty}`),
  // singleByEmail: (email) =>
  //   get(`/users?email=${email}`),
  // create: (params) =>
  //   post('/users', params),
  // update: (id, params) =>
  //   put(`/users/${id}`, params),
  // remove: (id) =>
  //   destroy(`/users/${id}`),
};
