import { ReactFacebookLoginInfo } from "react-facebook-login";
import * as loginTypes from "../loginTypes";


export function login(user: ReactFacebookLoginInfo) {
  const action: FBLoginAction = {
    type: loginTypes.LOGIN,
    user,
  };
  return simulateFBHttpRequest(action);
}

export function logout() {
  const action: FBLoginAction = {
    type: loginTypes.LOGOUT,
    user:null,
  };
  return simulateFBHttpRequest(action);
}


export function simulateFBHttpRequest(action: FBLoginAction) {
  return (dispatch: DispatchFBType) => {
      dispatch(action);

  };
}