import React from "react";
import UserUI from "../User/User";
import { ListContainer } from "./userList.style";

export function userDataToUserBOProps(user:UserData):Partial<UserBOProps>{
  let transformedData = {}
  if(user.first_name && user.last_name){
    transformedData={...transformedData,name:`${user.first_name} ${user.last_name}`}
  }
  if(user.name){
    transformedData={...transformedData,name:user.name}
  }
  if(user.email){
    transformedData={...transformedData,email:user.email}
  }
  if(user.job){
    transformedData={...transformedData,job:user.job}
  }
  if(user.avatar){
    transformedData={...transformedData,avatar:user.avatar};
  }
  return transformedData

}

const UserList = ({ users }: UserListProps) => {
  return (
    <ListContainer>
      {Object.keys(users).length>0 &&
        Object.keys(users).map((user) => (
          <UserUI key={users[user].id} {...userDataToUserBOProps(users[user])} />
        ))}
    </ListContainer>
  );
};

export default UserList;
