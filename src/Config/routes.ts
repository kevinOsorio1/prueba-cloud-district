import { lazy } from "react";
import Login from "../layouts/Login/Login";

const HomeContainer = lazy(()=>import('../layouts/Home/Home'))
const UserViewContainer = lazy(()=>import('../layouts/UserView/UserView'))

const routes:Array<RouteProps> = [
  {
    path: '/login',
    component: Login,
    isPrivate:false
  },
  {
    path: '/',
    component: HomeContainer,
    isPrivate:true
  },
  {
    path: '/user/:id',
    component: UserViewContainer,
    isPrivate:true
  },
]

export default routes