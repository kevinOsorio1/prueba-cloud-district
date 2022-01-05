import { usersKey } from "./localStorageKeys";

export const getUsers = () => {
  const usersStorage = localStorage.getItem(usersKey);
  if (usersStorage) {
    return JSON.parse(usersStorage);
  }
  return null;
};

const saveOnLocalStorage = (key: string, data: any) => {
  const dataParsed = JSON.stringify(data);
  localStorage.setItem(key, dataParsed);
};

export const saveUser = (user: UserData) => {
  const users = getUsers();
  if (users) {
    const newUsers = { ...users, [user.id]: user };
    saveOnLocalStorage(usersKey, newUsers);
  } else {
    saveOnLocalStorage(usersKey, { [user.id]: user });
  }
};

export const saveUsers = (users: UserMap) => {
  saveOnLocalStorage("users", users);
};

const storage = { getUsers, saveUser, saveUsers };

export default storage;
