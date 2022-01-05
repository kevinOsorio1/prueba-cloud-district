import { API, endpoints } from "../api/API";

export const usersApi = {
  findAll: (page: number) => findAllUsers(page),
  findOne: (id: number) => findOne(id),
  create: (name: string, job: string) => createUser(name, job),
  update: (id: number, data: PartialUserData) => updateUser(id, data),
  delete: (id:number) => deleteUser(id)
};

const deleteUser = (id:number) =>{
  return API.delete(`${endpoints.users}${id}`)
}

const updateUser = (id: number, data: PartialUserData) => {
  return API.put(`${endpoints.users}${id}`, data).then(
    (response) => response.data
  );
};

const createUser = (name: string, job: string) => {
  const user: PartialUserData = { name, job };
  return API.post(endpoints.users, user).then((response) => response.data);
};

const findAllUsers = (page: number) => {
  return API.get<UserList>(endpoints.users, {
    params: {
      page: page,
      per_page: 5,
    },
  });
};

const findOne = (id: number) => {
  return API.get<UserFetch>(`${endpoints.users}${id}`);
};
