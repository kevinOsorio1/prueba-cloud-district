import { createContext, useMemo } from "react";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { login, logout } from "../../redux/creators/loginCreators";



export const useLoginContext = ()=>{
  const logged: ReactFacebookLoginInfo= useSelector((state: {users:UserMap,login:ReactFacebookLoginInfo}) => state.login, shallowEqual);
  const dispatch: Dispatch<any> = useDispatch();
  const isLogged = useMemo(()=>{
    return logged?.accessToken ? true: false
  },[logged])


  const handleLogin =  (user: ReactFacebookLoginInfo) => {
     dispatch(login(user))
  };

  const handleLogout = ()=>{
    dispatch(logout())
  }

  return {
    isLogged,
    user: logged,
    handleLogin,
    handleLogout
  }
}
interface ILoginContext{
  isLogged:boolean,
  user: ReactFacebookLoginInfo | null,
  handleLogin: (user:ReactFacebookLoginInfo)=>void,
  handleLogout:()=>void
}
const defaultValue = {
  isLogged:false,
  user: null,
  handleLogin: (user:ReactFacebookLoginInfo)=>console.log('do something'),
  handleLogout:()=>console.log('do something')
}
export const LoginContext = createContext<ILoginContext>(defaultValue)