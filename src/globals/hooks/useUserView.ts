import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext/useUsersContext";
import Repository from "../../reposiitory/Repository";
import { useModal } from "./useModal";

export const useUserView = (id:string | undefined)=>{
  const {users,handleSaveUser,handleUpdateUser,handleDeleteUser} = useContext(UsersContext)
  const [user, setUser] = useState<UserData | null>(null);
  const { isShown, toggle } = useModal();
  const navigation = useNavigate()
  
  const initUser = useCallback(async () => {
    await Repository.users
      .findOne(Number(id))
      .then((response) => {
        handleSaveUser(response.data.data)
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log("api user not found, searching on local data");
        if (id && users[id]) {
          setUser(users[id]);
        }
      });
  }, [handleSaveUser, id, users]);

  const onConfirm = useCallback(
    async (data: PartialUserData) => {
      const updatedUser = await Repository.users.update(Number(id), data);
      if (updatedUser) {
        const parsedUser = { ...user, ...updatedUser, id: id };
        handleUpdateUser(parsedUser.id, parsedUser);
        setUser((prevState) => ({
          ...prevState,
          ...parsedUser,
        }));
        toggle();
      }
    },
    [handleUpdateUser, id, toggle, user]
  );

  const onDelete = async ()=>{
    await Repository.users.delete(Number(id))
    handleDeleteUser(Number(id))
    navigation("/", { replace: true });
  }

  const onCancel = () => toggle();

  useEffect(() => {
    if (!user) {
      initUser();
    }
  }, [initUser, user]);

  
  return {user,isShown,toggle,onDelete,onCancel,onConfirm}
}