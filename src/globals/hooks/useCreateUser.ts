import { useCallback } from "react";
import Repository from "../../reposiitory/Repository";
import { useModal } from "./useModal";
import { useSaveUser } from "./useSaveUser";

const useCreateUser = () => {
  const { isShown, toggle } = useModal();
  const { saveUser } = useSaveUser();

  const onConfirm = useCallback(
    async (name: string, job: string) => {
      const user: UserData = await Repository.users
        .create(name, job)
        .then((response) => {
          return response;
        });
      saveUser(user);
      toggle();
    },
    [saveUser, toggle]
  );
  const onCancel = () => toggle();
  return {
    isShown,
    toggle,
    onConfirm,
    onCancel,
  };
};

export default useCreateUser;
