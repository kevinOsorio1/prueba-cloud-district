import { useCallback, useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext/useUsersContext";

export const useSaveUser = () => {
  const { users:contextUsers,handleSaveUser, handleSaveUsers } = useContext(UsersContext);
  const saveUser = useCallback(
    (user: UserData) => handleSaveUser(user),
    [handleSaveUser]
  );
  const saveUserArray = useCallback(
    (users: UserData[]) => handleSaveUsers(users),
    [handleSaveUsers]
  );
  return { users:contextUsers ,saveUser, saveUserArray };
};
