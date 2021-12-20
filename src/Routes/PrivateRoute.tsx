import { ReactElement } from "react";
import { Route, Navigate } from "react-router-dom";

type PrivateRouteProps = {
  path: string;
  element: ReactElement | null;
};

export const PrivateRoute = (props: PrivateRouteProps) => {
  const isLogged = !!sessionStorage.getItem("authorization");
  return isLogged ? (
    <Route path={props.path} element={props.element} />
  ) : (
    <Navigate to="/" />
  );
};
