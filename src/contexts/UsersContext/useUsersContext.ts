import { createContext, useCallback } from "react";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  addMultiUser,
  addUser,
  removeUser,
  updateUser,
} from "../../redux/creators/userCreators";

export const useUsersContext = () => {
  const users: UserMap = useSelector(
    (state: { users: UserMap; login: ReactFacebookLoginInfo }) => state.users,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const getOneUser = useCallback(
    (id: string) => {
      return users[id];
    },
    [users]
  );

  const handleSaveUser = useCallback(
    (user: UserData) => {
      dispatch(addUser(user));
    },
    [dispatch]
  );

  const handleSaveUsers = useCallback(
    (newUsers: UserData[]) => {
      dispatch(addMultiUser(newUsers));
    },
    [dispatch]
  );

  const handleUpdateUser = useCallback(
    (id: number, user: UserData) => {
      dispatch(updateUser(id, user));
    },
    [dispatch]
  );

  const handleDeleteUser = useCallback(
    (id: number) => {
      dispatch(removeUser(id));
    },
    [dispatch]
  );

  return {
    users,
    getOneUser,
    handleSaveUser,
    handleSaveUsers,
    handleUpdateUser,
    handleDeleteUser,
  };
};

interface IUserContext {
  users: UserMap;
  getOneUser: (id: string) => void;
  handleSaveUser: (user: UserData) => void;
  handleSaveUsers: (newUsers: UserData[]) => void;
  handleUpdateUser: (id: number, user: UserData) => void;
  handleDeleteUser: (id: number) => void;
}
const defaultValue = {
  users: {},
  getOneUser: (id: string) => console.log("do something"),
  handleSaveUser: (user: UserData) => console.log("do something"),
  handleSaveUsers: (newUsers: UserData[]) => console.log("do something"),
  handleUpdateUser: (id: number, user: UserData) => console.log("do something"),
  handleDeleteUser: (id: number) => console.log("do something"),
};

export const UsersContext = createContext<IUserContext>(defaultValue);
