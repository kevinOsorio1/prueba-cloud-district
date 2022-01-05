import React from "react";
import { useLoginContext } from "../../contexts/LoginContext/useLoginContext";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../Config/routes";
import UsersProvider from "../../contexts/UsersProvider";

const AppRoute = () => {
  const { user } = useLoginContext();
  return (
    <Routes>
      {routes.map(({ path, isPrivate, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate && !Boolean(user?.accessToken) ? <Navigate to="/login" /> : <UsersProvider><Component /></UsersProvider>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoute;
