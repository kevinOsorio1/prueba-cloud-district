import storage from "./localStorage/localStorage";
import { usersApi } from "./users/usersApi";

const Repository = {
  users: usersApi,
  localStorage: storage,
};

export default Repository;
