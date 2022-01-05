import React from "react";
import { UserContainer, UserImage, UserName } from "./LoggedUserInfo.style";

interface UserLoggedProps {
  name: string;
  height: number;
  width: number;
  url:string;
}
const LoggedUserInfo = ({ name, height,width,url }:UserLoggedProps) => {
  return <UserContainer>
    <UserImage data-testid='userImage' alt={name} width={height} height={width} src={url}/> 
    <UserName data-testid='userName' >
      {name}
    </UserName>
  </UserContainer>
};
export default LoggedUserInfo;
