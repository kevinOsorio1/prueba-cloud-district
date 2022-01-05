import React from "react";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import LoggedUserInfo from "./Content/LoggedUserInfo";

const LoggedUser = ({
  user,
}: {
  user: ReactFacebookLoginInfo | null;
}) => {
  return user ? (
    <LoggedUserInfo
      name={user?.name || ""}
      height={user?.picture?.data.height || 0}
      width={user.picture?.data.width || 0}
      url={user.picture?.data.url || ""}
    />
  ) : null;
};

export default LoggedUser;
