import React, { useContext } from "react";
import LoginDialog from "../components/loginDialog";
import { AuthContext } from "../context/auth";

const PrivateRoute = ({ component: PathComponent, location, ...rest }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <LoginDialog redirectPath={location.pathname} />;
  }

  if (user) {
    return <PathComponent {...rest} />;
  }
};

export default PrivateRoute;
