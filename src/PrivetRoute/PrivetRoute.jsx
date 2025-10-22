import React from "react";
import { useAppContext } from "../contexts/context";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  const location = useLocation()
  if (userLoading) {
    return;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }

  return <div>{children}</div>;
};

export default PrivetRoute;
