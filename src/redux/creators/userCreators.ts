import * as userTypes from "../userTypes";

export function addUser(user: UserData) {
  const action: UserAction = {
    type: userTypes.ADD_USER,
    user,
  };
  return simulateUserHttpRequest(action);
}

export function addMultiUser(users: UserData[]) {
  const action: UserAction = {
    type: userTypes.ADD_USERS,
    user: null,
    users,
  };
  return simulateUserHttpRequest(action);
}

export function removeUser(id: number) {
  const action: UserAction = {
    type: userTypes.REMOVE_USER,
    user:null,
    id
  };
  return simulateUserHttpRequest(action);
}

export function updateUser(id: number, user: UserData) {
  const action: UserAction = {
    type: userTypes.UPDATE_USER,
    user,
    id: id,
  };
  return simulateUserHttpRequest(action);
}

export function simulateUserHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
