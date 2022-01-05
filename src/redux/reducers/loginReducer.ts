import { ReactFacebookLoginInfo } from "react-facebook-login";
import * as loginTypes from "../loginTypes";

const initialState =
  JSON.parse(sessionStorage.getItem("userLoged") || "null") || null;
const loginReducer = (
  state = initialState,
  action: FBLoginAction
): ReactFacebookLoginInfo | null => {
  switch (action.type) {
    case loginTypes.LOGIN:
      state = action.user;
      sessionStorage.setItem("userLoged", JSON.stringify(action.user));
      return state;
    case loginTypes.LOGOUT:
      state = null;
      sessionStorage.clear();
      localStorage.removeItem(`fblst_468354564902417`);
      return state;
  }
  return state;
};

export default loginReducer;
