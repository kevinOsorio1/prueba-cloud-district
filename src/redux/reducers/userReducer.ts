import Repository from "../../reposiitory/Repository";
import * as userTypes from "../userTypes";

const initialState: UserMap = Repository.localStorage.getUsers() || {};
const userReducer = (state = initialState, action: UserAction): UserMap => {
  switch (action.type) {
    case userTypes.ADD_USER:
      if (action.user) {
        const newUsers = {
          ...state,
          [action.user.id]: action.user,
        };
        Repository.localStorage.saveUsers(newUsers);
        return newUsers;
      }
      return { ...state };

    case userTypes.ADD_USERS:
      if (action.users) {
        const users = action.users.reduce((acc, el) => {
          return {
            ...acc,
            [el.id]: el,
          };
        }, {});
        const newUsers = { ...state, ...users };
        Repository.localStorage.saveUsers(newUsers);
        return newUsers;
      }
      return { ...state };

    case userTypes.REMOVE_USER:
      if (action.id || action.id === 0) {
        const newUsers = Object.keys(state).reduce(
          (acc, el) =>
            Number(el) === action.id ? acc : { ...acc, [el]: state[el] },
          {}
        );
        Repository.localStorage.saveUsers(newUsers);
        return newUsers;
      }
      return { ...state };

    case userTypes.UPDATE_USER:
      if ( action.user && state[action.user.id]) {
        const newUsers = { ...state, [action.user.id]: action.user };
        Repository.localStorage.saveUsers(newUsers);
        return newUsers;
      }
      return state
    default:
      return state;
  }
};

export default userReducer;
